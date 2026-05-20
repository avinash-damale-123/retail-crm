const foundationCards = [
  "Master Data",
  "Access Control",
  "Core Business",
  "Activities",
  "System & Reports",
];

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-12">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Retail CRM</h1>
        <p className="mt-3 text-lg text-slate-600">Lead -&gt; Customer -&gt; Booking</p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {foundationCards.map((card) => (
          <article
            key={card}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
          >
            <h2 className="text-lg font-semibold text-slate-800">{card}</h2>
            <p className="mt-2 text-sm text-slate-500">Foundation status: Planned</p>
          </article>
        ))}
      </section>
    </main>
  );
}
