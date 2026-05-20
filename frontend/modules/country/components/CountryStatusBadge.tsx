import { CountryStatus } from '../types';

type CountryStatusBadgeProps = {
  status: CountryStatus;
};

export function CountryStatusBadge({ status }: CountryStatusBadgeProps) {
  const badgeClass =
    status === 'Active'
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-amber-100 text-amber-700';

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>{status}</span>;
}
