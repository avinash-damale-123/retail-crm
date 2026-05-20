'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Country, CountryFormValues } from '../types';
import { normalizeCountryFormValues, validateCountryForm } from '../validation';

type CountryFormProps = {
  existingCountries: Country[];
  onSubmit: (values: CountryFormValues) => void;
};

const initialValues: CountryFormValues = {
  name: '',
  code: '',
  isoCode: '',
  phoneCode: '',
  currencyCode: '',
  status: 'Active',
  remarks: '',
};

export function CountryForm({ existingCountries, onSubmit }: CountryFormProps) {
  const [values, setValues] = useState<CountryFormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const statusOptions = useMemo(() => ['Active', 'Inactive'] as const, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateCountryForm(values, existingCountries);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const normalized = normalizeCountryFormValues(values);
    onSubmit(normalized);
    setValues(initialValues);
    setErrors({});
  };

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="grid gap-1">
        <label className="text-sm font-medium text-slate-700">Country Name</label>
        <input className="rounded-md border border-slate-300 px-3 py-2" value={values.name} onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))} />
        {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}
      </div>
      <div className="grid gap-1 md:grid-cols-2 md:gap-4">
        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700">Country Code</label>
          <input className="rounded-md border border-slate-300 px-3 py-2 uppercase" value={values.code} onChange={(e) => setValues((v) => ({ ...v, code: e.target.value.toUpperCase() }))} />
          {errors.code ? <p className="text-xs text-red-600">{errors.code}</p> : null}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700">Status</label>
          <select className="rounded-md border border-slate-300 px-3 py-2" value={values.status} onChange={(e) => setValues((v) => ({ ...v, status: e.target.value as CountryFormValues['status'] }))}>
            {statusOptions.map((status) => <option key={status}>{status}</option>)}
          </select>
        </div>
      </div>
      <button type="submit" className="w-fit rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">Save Country</button>
    </form>
  );
}
