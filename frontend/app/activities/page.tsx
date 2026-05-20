import { AppShell } from '@/components/layout/AppShell';
import { ModulePlaceholder } from '@/components/layout/ModulePlaceholder';

export default function ActivitiesPage() {
  return (
    <AppShell>
      <ModulePlaceholder
        title="Activity Management"
        description="Activities track meetings, calls, tasks, and operational follow-ups across the CRM."
        items={['Meetings', 'Calls', 'Tasks', 'Calendar']}
      />
    </AppShell>
  );
}
