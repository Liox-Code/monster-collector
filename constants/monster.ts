import { MonsterCardRarity } from '@/lib/schemas/monster';
import { MonsterCardStatKey } from '@/types/monster';
import { Option } from '@/types/ui';

export const MONSTER_STAT_MAX = 250;

export const MAX_FAVORITE_LIMIT = 10;
export const MAX_MONSTERS_PER_PAGE = 16;

export const MONSTER_STAT_LABELS: Record<MonsterCardStatKey, string> = {
  hp: 'Health Points',
  attack: 'Attack',
  defense: 'Defense',
  specialAttack: 'Special Attack',
  specialSpell: 'Special Spell',
  speed: 'Speed',
};

export const MONSTER_STAT_SHORT_LABELS: Record<MonsterCardStatKey, string> = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  specialAttack: 'SP.ATK',
  specialSpell: 'SP.SPL',
  speed: 'SPD',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Monster', href: '/monster' },
  { label: 'Teams', href: '/teams' },
  { label: 'Ranking', href: '/ranking' },
  { label: 'Dashboard', href: '/dashboard' },
];

export const MONSTER_RARITY: Option<MonsterCardRarity>[] = [
  {
    value: 'legendary',
    label: 'Legendary',
  },
  {
    value: 'rare',
    label: 'Rare',
  },
  {
    value: 'normal',
    label: 'Normal',
  },
];

export const MONSTER_STATS_SORT: Option<MonsterCardStatKey>[] = [
  {
    value: 'hp',
    label: 'Hp',
  },
  {
    value: 'attack',
    label: 'Attack',
  },
  {
    value: 'defense',
    label: 'Defense',
  },
  {
    value: 'specialAttack',
    label: 'SpecialAttack',
  },
  {
    value: 'specialSpell',
    label: 'SpecialSpell',
  },
  {
    value: 'speed',
    label: 'Speed',
  },
];
