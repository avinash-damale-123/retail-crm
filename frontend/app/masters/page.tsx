import { AppShell } from '@/components/layout/AppShell';
import { ModulePlaceholder } from '@/components/layout/ModulePlaceholder';

export default function MastersPage() {
  return (
    <AppShell>
      <ModulePlaceholder
        title="Master Data Modules"
        description="Master modules provide the organizational and operational foundation of the Retail CRM."
        items={['Countries', 'Regions', 'Branches', 'Departments']}
      />
    </AppShell>
  );
}
