import { Country } from '../types';
import { CountryStatusBadge } from './CountryStatusBadge';

type CountryTableProps = {
  countries: Country[];
};

export function CountryTable({ countries }: CountryTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50 text-left text-slate-500">
          <tr>
            <th className="px-4 py-3 font-semibold">Country ID</th>
            <th className="px-4 py-3 font-semibold">Country Name</th>
            <th className="px-4 py-3 font-semibold">Country Code</th>
            <th className="px-4 py-3 font-semibold">ISO Code</th>
            <th className="px-4 py-3 font-semibold">Dial Code</th>
            <th className="px-4 py-3 font-semibold">Currency Code</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold">Created At</th>
            <th className="px-4 py-3 font-semibold">Updated At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
          {countries.map((country) => (
            <tr key={country.id}>
              <td className="px-4 py-3 font-medium">{country.id}</td>
              <td className="px-4 py-3">{country.name}</td>
              <td className="px-4 py-3">{country.code}</td>
              <td className="px-4 py-3">{country.isoCode || '-'}</td>
              <td className="px-4 py-3">{country.phoneCode || '-'}</td>
              <td className="px-4 py-3">{country.currencyCode || '-'}</td>
              <td className="px-4 py-3"><CountryStatusBadge status={country.status} /></td>
              <td className="px-4 py-3">{new Date(country.createdAt).toLocaleDateString()}</td>
              <td className="px-4 py-3">{new Date(country.updatedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
