import { AppShell } from '@/components/layout/AppShell';
import { ModulePlaceholder } from '@/components/layout/ModulePlaceholder';

export default function LeadsPage() {
  return (
    <AppShell>
      <ModulePlaceholder
        title="Lead Management"
        description="Lead management will handle inquiry capture, qualification, assignment, follow-ups, and conversion into customers."
        items={['Lead List', 'Lead Create', 'Lead Detail', 'Lead Timeline', 'Lead Conversion']}
      />
    </AppShell>
  );
}
