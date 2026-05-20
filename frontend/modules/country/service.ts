import { countryMockData } from './mock-data';
import { Country, CountryFormValues } from './types';
import { normalizeCountryFormValues } from './validation';

const API_BASE = '/api/countries';

export async function listCountries(): Promise<Country[]> {
  const response = await fetch(API_BASE, { cache: 'no-store' });
  if (!response.ok) {
    return countryMockData;
  }

  const payload = (await response.json()) as { data?: Country[] };
  return payload.data ?? countryMockData;
}

export async function createCountry(values: CountryFormValues): Promise<Country> {
  const normalizedValues = normalizeCountryFormValues(values);

  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(normalizedValues),
  });

  if (!response.ok) {
    throw new Error('Failed to create country.');
  }

  const payload = (await response.json()) as { data: Country };
  return payload.data;
}
