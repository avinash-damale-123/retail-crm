'use client';

import { useMemo, useState } from 'react';
import { countryMockData } from '../mock-data';
import { Country, CountryStatus } from '../types';
import { CountryForm } from './CountryForm';
import { CountryTable } from './CountryTable';

export function CountryManagement() {
  const [countries, setCountries] = useState<Country[]>(countryMockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | CountryStatus>('All');
  const [showForm, setShowForm] = useState(false);

  const filteredCountries = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return countries.filter((country) => {
      const matchesStatus = statusFilter === 'All' || country.status === statusFilter;
      const matchesSearch =
        !search ||
        country.name.toLowerCase().includes(search) ||
        country.code.toLowerCase().includes(search) ||
        country.isoCode?.toLowerCase().includes(search) ||
        country.phoneCode?.toLowerCase().includes(search) ||
        country.currencyCode?.toLowerCase().includes(search);

      return matchesStatus && matchesSearch;
    });
  }, [countries, searchTerm, statusFilter]);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">Country Management</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Countries are controlled master records used across Leads, Customers, Bookings, reports, and operational workflows.</p>
        </div>
        <button onClick={() => setShowForm((v) => !v)} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">Add Country</button>
      </div>

      <div className="mb-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-3">
        <input placeholder="Search by name, code, ISO, dial, currency" className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as 'All' | CountryStatus)}>
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {showForm ? (
        <div className="mb-4">
          <CountryForm
            existingCountries={countries}
            onSubmit={(values) => {
              const now = new Date().toISOString();
              const nextId = `CNT-${String(countries.length + 1).padStart(3, '0')}`;
              const created: Country = { id: nextId, createdAt: now, updatedAt: now, ...values };
              setCountries((prev) => [created, ...prev]);
              setShowForm(false);
            }}
          />
        </div>
      ) : null}

      <CountryTable countries={filteredCountries} />
    </section>
  );
}
