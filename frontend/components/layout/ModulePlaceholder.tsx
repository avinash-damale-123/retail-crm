type ModulePlaceholderProps = {
  title: string;
  description: string;
  items?: string[];
};

export function ModulePlaceholder({ title, description, items = [] }: ModulePlaceholderProps) {
  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-950">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
      </div>

      {items.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">{item}</h2>
              <p className="mt-2 text-sm text-slate-500">Implementation planned in upcoming module tasks.</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
