import { MONSTER_STAT_LABELS, MONSTER_STAT_SHORT_LABELS } from '@/constants/monster';
import { MonsterCardStatKey, MonsterCardStats, MonsterCardStatsDisplay } from '@/types/monster';
import { MonsterFilters, monsterFilterSchema } from './schemas/monster';

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

export function parseMonsterFilters(params: URLSearchParams): MonsterFilters {
  const monsterFilters = monsterFilterSchema.parse({
    type: params.getAll('type'),
    rarity: params.get('rarity'),
    page: params.get('page'),
    stat: params.get('stat'),
  });

  return monsterFilters;
}

export function buildMonsterQuery(filters: MonsterFilters): URLSearchParams {
  const params = new URLSearchParams();

  filters.type.forEach((type) => {
    params.append('type', type);
  });
  if (filters.rarity) {
    params.set('rarity', filters.rarity);
  }
  if (filters.stat) {
    params.set('stat', filters.stat);
  }
  params.set('page', String(filters.page));

  return params;
}
