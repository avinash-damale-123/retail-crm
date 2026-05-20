import { NextRequest, NextResponse } from 'next/server';
import { countryMockData } from '@/modules/country/mock-data';
import { Country } from '@/modules/country/types';
import { normalizeCountryFormValues, validateCountryForm } from '@/modules/country/validation';

const countriesStore: Country[] = [...countryMockData];

type Params = { params: { id: string } };

export async function GET(_request: NextRequest, { params }: Params) {
  const country = countriesStore.find((item) => item.id === params.id);
  if (!country) {
    return NextResponse.json({ error: 'Country not found' }, { status: 404 });
  }

  return NextResponse.json({ data: country });
}

export async function PUT(request: NextRequest, { params }: Params) {
  const index = countriesStore.findIndex((item) => item.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: 'Country not found' }, { status: 404 });
  }

  const body = await request.json();
  const normalized = normalizeCountryFormValues(body);
  const errors = validateCountryForm(normalized, countriesStore, params.id);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  countriesStore[index] = {
    ...countriesStore[index],
    ...normalized,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({ data: countriesStore[index] });
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const index = countriesStore.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: 'Country not found' }, { status: 404 });
  }

  const body = (await request.json()) as { status?: Country['status'] };

  if (!body.status || !['Active', 'Inactive'].includes(body.status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  countriesStore[index] = {
    ...countriesStore[index],
    status: body.status,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({ data: countriesStore[index] });
}
