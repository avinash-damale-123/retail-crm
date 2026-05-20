import { redirect } from 'next/navigation';

import { checkAuthentication, mockLogin } from '@/lib/auth/auth-utils';

export default async function LoginPage() {
  const auth = await checkAuthentication();

  if (auth.isAuthenticated) {
    redirect('/dashboard');
  }

  async function loginAction(formData: FormData) {
    'use server';

    const result = await mockLogin({
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('password') ?? ''),
    });

    if (result.success) {
      redirect('/dashboard');
    }

    redirect('/login?error=invalid');
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form action={loginAction} className="w-full rounded-xl bg-white p-6 shadow">
        <h1 className="mb-2 text-2xl font-semibold">Retail CRM Login</h1>
        <p className="mb-6 text-sm text-slate-600">Use mock credentials: admin@retailcrm.local / password123</p>
        <label className="mb-4 block text-sm">
          <span className="mb-1 block">Email</span>
          <input name="email" type="email" required className="w-full rounded border px-3 py-2" />
        </label>
        <label className="mb-6 block text-sm">
          <span className="mb-1 block">Password</span>
          <input name="password" type="password" required className="w-full rounded border px-3 py-2" />
        </label>
        <button type="submit" className="w-full rounded bg-slate-900 px-4 py-2 text-white">
          Sign in
        </button>
      </form>
    </main>
  );
}
