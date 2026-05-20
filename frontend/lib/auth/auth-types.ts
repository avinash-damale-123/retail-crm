export type AuthRole = 'super_admin' | 'manager' | 'agent';

export type PermissionKey =
  | 'dashboard:view'
  | 'lead:view'
  | 'customer:view'
  | 'booking:view'
  | 'settings:manage';

export type PermissionSet = PermissionKey[];

export type AuthUser = {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  role: AuthRole;
  permissionSet: PermissionSet;
  branchIds: string[];
};

export type AuthSession = {
  user: AuthUser;
  issuedAt: string;
  expiresAt: string;
  shortSessionAt: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type AuthCheckResult =
  | { isAuthenticated: true; session: AuthSession }
  | { isAuthenticated: false; reason: 'missing_session' | 'expired_session' | 'invalid_session' };
