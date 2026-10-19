import type { NullableCompactMonsterCard, CompactMonsterSummary } from '@/types/monster';
import Image from 'next/image';
import MonsterBadge from './monster-badge';

type Props = {
  monsterCard: NullableCompactMonsterCard;
};

export default function CompactMonsterCard({ monsterCard }: Props) {
  const defaultMonsterCard: CompactMonsterSummary = {
    ...monsterCard,
    monsterName: monsterCard?.monsterName ?? 'Unkwown',
    level: monsterCard?.level ?? '1',
    imageUrl: monsterCard?.imageUrl ?? '/unkown_monster.png',
    types: monsterCard?.types ?? [],
  };

  return (
    <div className="bg-surface-2 border-primary-200/10 flex min-w-30 flex-col items-center rounded-xl border-2 p-2">
      <div className="relative flex min-h-20 w-full flex-col items-end overflow-hidden rounded-xl p-2">
        <div className="z-1 flex flex-wrap">
          <MonsterBadge label={defaultMonsterCard.types[0]} variant={defaultMonsterCard.types[0]} />
        </div>
        <Image src={'/unkown_monster.png'} alt="Monster Card" fill className="object-cover" />
      </div>
      <h5 className="text-xl font-semibold">{defaultMonsterCard.monsterName}</h5>
      <span className="text-primary-200 inline-flex gap-3">
        <span>Lv.</span>
        <span>{defaultMonsterCard.level}</span>
      </span>
    </div>
  );
}
