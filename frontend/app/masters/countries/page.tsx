import { AppShell } from '@/components/layout/AppShell';
import { CountryManagement } from '@/modules/country/components/CountryManagement';

export default function CountriesPage() {
  return (
    <AppShell>
      <CountryManagement />
    </AppShell>
  );
}
