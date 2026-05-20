import { AppShell } from '@/components/layout/AppShell';

const countries = [
  {
    id: 'CNT-001',
    name: 'India',
    code: 'IND',
    currency: 'INR',
    status: 'Active',
  },
  {
    id: 'CNT-002',
    name: 'United Arab Emirates',
    code: 'UAE',
    currency: 'AED',
    status: 'Active',
  },
  {
    id: 'CNT-003',
    name: 'Singapore',
    code: 'SGP',
    currency: 'SGD',
    status: 'Inactive',
  },
];

export default function CountriesPage() {
  return (
    <AppShell>
      <section>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-950">Country Management</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Countries are controlled master records used across Leads, Customers, Bookings, reports, and operational workflows.
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            Add Country
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Country ID</th>
                <th className="px-4 py-3 font-semibold">Country Name</th>
                <th className="px-4 py-3 font-semibold">Country Code</th>
                <th className="px-4 py-3 font-semibold">Currency</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
              {countries.map((country) => (
                <tr key={country.id}>
                  <td className="px-4 py-3 font-medium">{country.id}</td>
                  <td className="px-4 py-3">{country.name}</td>
                  <td className="px-4 py-3">{country.code}</td>
                  <td className="px-4 py-3">{country.currency}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        country.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {country.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
