import type { ReactNode } from 'react';

import type { AuthSession } from '@/lib/auth/auth-types';

export function ProtectedShell({ session, children }: { session: AuthSession; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <header className="mb-6 rounded-xl bg-white p-4 shadow-sm">
        <h1 className="text-xl font-semibold">Retail CRM Dashboard</h1>
        <p className="text-sm text-slate-600">Signed in as {session.user.fullName}</p>
      </header>
      {children}
    </main>
  );
}
