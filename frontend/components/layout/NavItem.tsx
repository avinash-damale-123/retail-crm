import Link from 'next/link';

export type NavItemProps = {
  href: string;
  label: string;
  description?: string;
};

export function NavItem({ href, label, description }: NavItemProps) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
    >
      <span className="block">{label}</span>
      {description ? (
        <span className="mt-0.5 block text-xs font-normal text-slate-500">{description}</span>
      ) : null}
    </Link>
  );
}
