import type { MonsterSummary, MonsterCardStats, NullableMonsterCard } from '@/types/monster';
import Image from 'next/image';
import StatBar from './stat-bar';
import { MONSTER_STAT_MAX } from '@/constants/monster';
import { formatCardNumber, getMonsterStatsDisplay } from '@/lib/monster';
import MonsterBadge from './monster-badge';

type Props = {
  monsterCard: NullableMonsterCard;
};

export default function MonsterCard({ monsterCard }: Props) {
  const defaultMonsterStats: MonsterCardStats = {
    hp: monsterCard?.stats?.hp ?? 0,
    attack: monsterCard?.stats?.attack ?? 0,
    defense: monsterCard?.stats?.defense ?? 0,
    specialAttack: monsterCard?.stats?.specialAttack ?? 0,
    specialSpell: monsterCard?.stats?.specialSpell ?? 0,
    speed: monsterCard?.stats?.speed ?? 0,
  };

  const defaultMonsterCard: MonsterSummary = {
    ...monsterCard,
    cardNumber: monsterCard?.cardNumber ?? 0,
    monsterName: monsterCard?.monsterName ?? 'Unkwown',
    combatRole: monsterCard?.combatRole ?? 'Unkwown',
    description: monsterCard?.description ?? 'Unkwown',
    level: monsterCard?.level ?? '1',
    favorite: monsterCard?.favorite ?? false,
    imageUrl: monsterCard?.imageUrl ?? '/unkown_monster.png',
    types: monsterCard?.types ?? [],
    rarity: monsterCard?.rarity ?? 'Legendary',
    stats: defaultMonsterStats,
  };

  const cardNumberDisplay = formatCardNumber(defaultMonsterCard.cardNumber);
  const monsterStatsDisplay = getMonsterStatsDisplay(defaultMonsterStats);

  return (
    <div className="bg-surface-1 grid h-full w-full grid-flow-row gap-4 rounded-xl p-6">
      <div className="inline-flex gap-2">
        <span className="text-primary-200 rounded bg-neutral-800 px-2 py-1 text-sm">
          {cardNumberDisplay}
        </span>
        <MonsterBadge label={defaultMonsterCard.rarity} variant={defaultMonsterCard.rarity} />
      </div>
      <div className="relative grid h-50 w-full overflow-hidden">
        <Image src={'/unkown_monster.png'} alt="Monster Card" fill className="object-cover" />
        <div className="z-1 flex flex-wrap gap-2 self-end p-2">
          {defaultMonsterCard.types.map((type, index) => (
            <MonsterBadge key={index} label={type} variant={type} size="md" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="inline-flex w-full items-center justify-between">
          <h5 className="text-3xl font-semibold">{defaultMonsterCard.monsterName}</h5>
          <span className="text-primary-200 inline-flex gap-3">
            <span>Lv.</span>
            <span>{defaultMonsterCard.level}</span>
          </span>
        </div>
        <span className="text-primary-200">{defaultMonsterCard.combatRole}</span>
      </div>
      <div className="bg-surface-2 p-2">
        <div className="grid grid-flow-col justify-between uppercase">
          <h6 className="text-primary-200 font-mono text-base">Combat Attributes</h6>
          <span className="inline-flex gap-3">
            <span>Scale:</span>
            <span>{MONSTER_STAT_MAX}</span>
            <span>cap</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono">
          {monsterStatsDisplay.map((monsterStat) => {
            return <StatBar key={monsterStat.key} max={MONSTER_STAT_MAX} stat={monsterStat} />;
          })}
        </div>
      </div>
    </div>
  );
}
