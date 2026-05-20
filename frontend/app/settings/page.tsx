import { AppShell } from '@/components/layout/AppShell';
import { ModulePlaceholder } from '@/components/layout/ModulePlaceholder';

export default function SettingsPage() {
  return (
    <AppShell>
      <ModulePlaceholder
        title="System Settings"
        description="Settings modules will manage users, permissions, activity tracking, integrations, and governance controls."
        items={['Users', 'Roles & Permissions', 'Activity Tracking', 'Audit Logs']}
      />
    </AppShell>
  );
}
