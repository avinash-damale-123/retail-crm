export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Retail CRM Dashboard</h2>
        <p className="text-sm text-slate-500">
          Central workspace for retail sales and operations.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
          Super Admin
        </div>

        <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          Logout
        </button>
      </div>
    </header>
  );
}
