import { MONSTER_BADGE_STYLE } from '@/constants/monster-ui';
import { MonsterBadgeLabel } from '@/types/monster';
import { Sizes } from '@/types/ui';
import { LucideIcon } from 'lucide-react';

type Props = {
  startIcon?: LucideIcon;
  label: string | null;
  variant: MonsterBadgeLabel | null;
  size?: Sizes;
  iconClassName?: string;
};

export default function MonsterBadge({
  startIcon: StartIcon,
  label,
  variant,
  size = 'sm',
  iconClassName,
}: Props) {
  const defaultClassname = variant
    ? MONSTER_BADGE_STYLE[variant]
    : 'bg-neutral-800 text-primary-200';

  const badgeSize: Record<Sizes, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2 py-1 text-base',
    md: 'px-3 py-1 text-lg',
    lg: 'px-3 py-2 text-xl',
  };

  return (
    <span className={`flex items-center gap-1 rounded ${defaultClassname} ${badgeSize[size]}`}>
      {StartIcon && <StartIcon className={`fill-current stroke-current ${iconClassName}`} />}
      <span>{label}</span>
    </span>
  );
}
