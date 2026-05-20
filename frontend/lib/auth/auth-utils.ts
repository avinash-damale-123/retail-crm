import { cookies } from 'next/headers';

import type { AuthCheckResult, AuthSession, LoginInput } from './auth-types';
import { AUTH_COOKIE_NAME, clearSessionCookie, createSessionPayload, parseSessionCookie, setSessionCookie } from './session';

const MOCK_USER: AuthSession['user'] = {
  id: 'mock-user-1',
  email: 'admin@retailcrm.local',
  fullName: 'Retail CRM Admin',
  isActive: true,
  role: 'super_admin',
  permissionSet: ['dashboard:view'],
  branchIds: ['default-branch'],
};

export async function mockLogin(input: LoginInput): Promise<{ success: true } | { success: false; message: string }> {
  if (!input.email || !input.password) {
    return { success: false, message: 'Email and password are required.' };
  }

  if (input.email !== MOCK_USER.email || input.password !== 'password123') {
    return { success: false, message: 'Invalid credentials.' };
  }

  if (!isUserActive(MOCK_USER)) {
    return { success: false, message: 'User is inactive and cannot sign in.' };
  }

  const session = createSessionPayload(MOCK_USER);
  await setSessionCookie(session);

  return { success: true };
}

export async function logout(): Promise<void> {
  await clearSessionCookie();
}

export function isUserActive(user: AuthSession['user']): boolean {
  return user.isActive;
}

export function hasPermission(session: AuthSession, permission: string): boolean {
  return session.user.permissionSet.includes(permission as never);
}

export function hasRole(session: AuthSession, allowedRoles: AuthSession['user']['role'][]): boolean {
  return allowedRoles.includes(session.user.role);
}

export async function getCurrentSession(): Promise<AuthSession | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const session = parseSessionCookie(raw);

  if (!session) {
    return null;
  }

  if (new Date(session.expiresAt).getTime() < Date.now()) {
    await clearSessionCookie();
    return null;
  }

  return session;
}

export async function checkAuthentication(): Promise<AuthCheckResult> {
  const session = await getCurrentSession();

  if (!session) {
    return { isAuthenticated: false, reason: 'missing_session' };
  }

  if (new Date(session.expiresAt).getTime() < Date.now()) {
    return { isAuthenticated: false, reason: 'expired_session' };
  }

  return { isAuthenticated: true, session };
}

// Placeholder hook for future DB-backed checks via Prisma User + PermissionSet tables.
export function isUserAuthorizedForFuturePolicyChecks(session: AuthSession): boolean {
  return isUserActive(session.user);
}
