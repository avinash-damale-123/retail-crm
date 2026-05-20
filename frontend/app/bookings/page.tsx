import { AppShell } from '@/components/layout/AppShell';
import { ModulePlaceholder } from '@/components/layout/ModulePlaceholder';

export default function BookingsPage() {
  return (
    <AppShell>
      <ModulePlaceholder
        title="Booking Management"
        description="Bookings represent confirmed business transactions and the revenue layer of the Retail CRM."
        items={['Booking List', 'Booking Detail', 'Payment Tracking', 'Booking Lifecycle']}
      />
    </AppShell>
  );
}
