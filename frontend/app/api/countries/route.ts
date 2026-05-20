import { NextRequest, NextResponse } from 'next/server';
import { countryMockData } from '@/modules/country/mock-data';
import { Country } from '@/modules/country/types';
import { normalizeCountryFormValues, validateCountryForm } from '@/modules/country/validation';

const countriesStore: Country[] = [...countryMockData];

export async function GET() {
  return NextResponse.json({ data: countriesStore });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const normalized = normalizeCountryFormValues(body);
  const errors = validateCountryForm(normalized, countriesStore);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const now = new Date().toISOString();
  const nextId = `CNT-${String(countriesStore.length + 1).padStart(3, '0')}`;

  const createdCountry: Country = {
    id: nextId,
    name: normalized.name,
    code: normalized.code,
    isoCode: normalized.isoCode,
    phoneCode: normalized.phoneCode,
    currencyCode: normalized.currencyCode,
    status: normalized.status,
    createdAt: now,
    updatedAt: now,
  };

  countriesStore.unshift(createdCountry);

  return NextResponse.json({ data: createdCountry }, { status: 201 });
}
