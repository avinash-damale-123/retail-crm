import { AppShell } from '@/components/layout/AppShell';

const statusCards = [
  { label: 'Foundation', value: 'Ready', detail: 'Next.js, TypeScript, Tailwind' },
  { label: 'Database', value: 'Prepared', detail: 'Prisma and PostgreSQL schema foundation' },
  { label: 'Authentication', value: 'Started', detail: 'Login, session, and protected routes' },
  { label: 'Next Module', value: 'Country', detail: 'First master module implementation' },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <section>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-950">Dashboard</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            This dashboard is the protected CRM workspace. Business KPIs and operational summaries will be added after core modules are implemented.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statusCards.map((card) => (
            <div key={card.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">{card.label}</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">{card.value}</h2>
              <p className="mt-2 text-sm text-slate-500">{card.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
