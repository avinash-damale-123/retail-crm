import { Country, CountryFormValues } from './types';

export type CountryValidationErrors = Partial<Record<keyof CountryFormValues, string>>;

const toOptionalUpper = (value?: string) => value?.trim().toUpperCase() ?? '';

export const normalizeCountryFormValues = (values: CountryFormValues): CountryFormValues => ({
  ...values,
  name: values.name.trim(),
  code: values.code.trim().toUpperCase(),
  isoCode: toOptionalUpper(values.isoCode) || undefined,
  phoneCode: values.phoneCode?.trim() || undefined,
  currencyCode: toOptionalUpper(values.currencyCode) || undefined,
  remarks: values.remarks?.trim() || undefined,
});

export const validateCountryForm = (
  values: CountryFormValues,
  existingCountries: Country[] = [],
  currentCountryId?: string,
): CountryValidationErrors => {
  const normalizedValues = normalizeCountryFormValues(values);
  const errors: CountryValidationErrors = {};

  if (!normalizedValues.name) {
    errors.name = 'Country Name is required.';
  }

  if (!normalizedValues.code) {
    errors.code = 'Country Code is required.';
  }


  const nameExists = existingCountries.some(
    (country) =>
      country.id !== currentCountryId &&
      country.name.trim().toLowerCase() === normalizedValues.name.toLowerCase(),
  );

  const codeExists = existingCountries.some(
    (country) => country.id !== currentCountryId && country.code.trim().toUpperCase() === normalizedValues.code,
  );

  const isoExists =
    normalizedValues.isoCode &&
    existingCountries.some(
      (country) =>
        country.id !== currentCountryId &&
        country.isoCode?.trim().toUpperCase() === normalizedValues.isoCode,
    );

  if (nameExists) {
    errors.name = 'Country Name must be unique.';
  }

  if (codeExists) {
    errors.code = 'Country Code must be unique.';
  }

  if (isoExists) {
    errors.isoCode = 'ISO Code must be unique when provided.';
  }

  if (!['Active', 'Inactive'].includes(normalizedValues.status)) {
    errors.status = 'Status must be Active or Inactive.';
  }

  return errors;
};
