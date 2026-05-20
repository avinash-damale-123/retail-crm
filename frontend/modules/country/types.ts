export type CountryStatus = 'Active' | 'Inactive';

export type Country = {
  id: string;
  name: string;
  code: string;
  isoCode?: string;
  phoneCode?: string;
  currencyCode?: string;
  status: CountryStatus;
  createdAt: string;
  updatedAt: string;
};

export type CountryFormValues = {
  name: string;
  code: string;
  isoCode?: string;
  phoneCode?: string;
  currencyCode?: string;
  status: CountryStatus;
  remarks?: string;
};
