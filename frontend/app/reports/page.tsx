import { AppShell } from '@/components/layout/AppShell';
import { ModulePlaceholder } from '@/components/layout/ModulePlaceholder';

export default function ReportsPage() {
  return (
    <AppShell>
      <ModulePlaceholder
        title="Reports and Dashboard"
        description="Reporting modules will provide business visibility, KPI tracking, conversion analytics, and operational monitoring."
        items={['Dashboard', 'Revenue Reports', 'Branch Performance', 'User Performance']}
      />
    </AppShell>
  );
}
