import { NavItem } from './NavItem';

const navigation = [
  {
    title: 'Dashboard',
    items: [{ href: '/dashboard', label: 'Overview' }],
  },
  {
    title: 'Masters',
    items: [
      { href: '/masters', label: 'Countries & Regions' },
      { href: '/masters', label: 'Branches' },
      { href: '/masters', label: 'Departments' },
    ],
  },
  {
    title: 'CRM',
    items: [
      { href: '/leads', label: 'Leads' },
      { href: '/customers', label: 'Customers' },
      { href: '/bookings', label: 'Bookings' },
    ],
  },
  {
    title: 'Activities',
    items: [
      { href: '/activities', label: 'Meetings' },
      { href: '/activities', label: 'Calls' },
      { href: '/activities', label: 'Tasks' },
    ],
  },
  {
    title: 'Reports & Settings',
    items: [
      { href: '/reports', label: 'Reports' },
      { href: '/settings', label: 'Settings' },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 px-6 py-5">
        <h1 className="text-xl font-bold text-slate-900">Retail CRM</h1>
        <p className="mt-1 text-sm text-slate-500">Lead → Customer → Booking</p>
      </div>

      <nav className="space-y-6 px-4 py-6">
        {navigation.map((group) => (
          <div key={group.title}>
            <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {group.title}
            </h2>

            <div className="space-y-1">
              {group.items.map((item) => (
                <NavItem key={item.label} href={item.href} label={item.label} />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
