import { MonsterCardStatsDisplay } from '@/types/monster';

type Props = {
  stat: MonsterCardStatsDisplay;
  max: number;
};

export default function StatBar({ stat, max }: Props) {
  const percentage = (stat.value / max) * 100;

  return (
    <div>
      <div className="grid grid-flow-col justify-between">
        <div>
          <span className="text-primary-200">{stat.shortLabel}</span>
        </div>
        <div className="inline-flex gap-2 text-neutral-300">
          <span className="text-neutral-50">{stat.value}</span>
          <span>/</span>
          <span>{max}</span>
        </div>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-800">
        <div className="bg-primary-500 h-full rounded-full" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
