import { cookies } from 'next/headers';

import type { AuthSession } from './auth-types';

export const AUTH_COOKIE_NAME = 'retail_crm_session';
export const SESSION_TIMEOUT_MINUTES = 15;
export const SHORT_SESSION_THRESHOLD_MINUTES = 2;

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

export function createSessionPayload(user: AuthSession['user']): AuthSession {
  const now = new Date();

  return {
    user,
    issuedAt: now.toISOString(),
    expiresAt: addMinutes(now, SESSION_TIMEOUT_MINUTES).toISOString(),
    shortSessionAt: addMinutes(now, SHORT_SESSION_THRESHOLD_MINUTES).toISOString(),
  };
}

export async function setSessionCookie(session: AuthSession): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE_NAME, JSON.stringify(session), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: new Date(session.expiresAt),
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export function parseSessionCookie(value: string | undefined): AuthSession | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as AuthSession;
    if (!parsed?.user?.id || !parsed.expiresAt) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}
