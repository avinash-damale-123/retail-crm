import { redirect } from 'next/navigation';

import { ProtectedShell } from '@/components/layout/protected-shell';
import { getCurrentSession, logout } from '@/lib/auth/auth-utils';

export default async function DashboardPage() {
  const session = await getCurrentSession();

  if (!session) {
    redirect('/login');
  }

  async function logoutAction() {
    'use server';
    await logout();
    redirect('/login');
  }

  return (
    <ProtectedShell session={session}>
      <section className="rounded-xl bg-white p-4 shadow-sm">
        <p className="mb-4 text-sm text-slate-700">Protected route foundation is active. Future widgets and CRM modules will render here.</p>
        <form action={logoutAction}>
          <button type="submit" className="rounded bg-slate-800 px-4 py-2 text-sm text-white">
            Logout
          </button>
        </form>
      </section>
    </ProtectedShell>
  );
}
