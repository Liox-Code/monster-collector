import { MONSTER_STAT_LABELS, MONSTER_STAT_SHORT_LABELS } from '@/constants/monster';
import { MonsterCardStatKey, MonsterCardStats, MonsterCardStatsDisplay } from '@/types/monster';

export function getMonsterStatsDisplay(monsterStats: MonsterCardStats): MonsterCardStatsDisplay[] {
  const monsterCardStatsDisplay = Object.entries(monsterStats).map(([key, value]) => {
    const statKey = key as MonsterCardStatKey;

    return {
      key: statKey,
      label: MONSTER_STAT_LABELS[statKey],
      shortLabel: MONSTER_STAT_SHORT_LABELS[statKey],
      value: value,
    };
  });

  return monsterCardStatsDisplay;
}

export function formatCardNumber(value: number): string {
  return `#${String(value).padStart(3, '0')}`;
}
