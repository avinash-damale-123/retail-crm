import { AppShell } from '@/components/layout/AppShell';
import { ModulePlaceholder } from '@/components/layout/ModulePlaceholder';

export default function CustomersPage() {
  return (
    <AppShell>
      <ModulePlaceholder
        title="Customer Management"
        description="Customer records represent converted and validated business entities within the CRM lifecycle."
        items={['Customer List', 'Customer Detail', 'Booking History', 'Activity Timeline']}
      />
    </AppShell>
  );
}
