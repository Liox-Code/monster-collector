import {
  AllTypesFilter,
  MonsterCardRarityFilter,
  MonsterCardStatFilter,
  MonsterCardStatKey,
  MonsterCardTypes,
} from '@/types/monster';
import { Option } from '@/types/ui';

export const MONSTER_STAT_MAX = 250;

export const MAX_FAVORITE_LIMIT = 10;

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

export const ALL_TYPE_FILTER: AllTypesFilter = 'All';

export const MONSTER_TYPES: (MonsterCardTypes | AllTypesFilter)[] = [
  ALL_TYPE_FILTER,
  'Fire',
  'Water',
  'Wind',
  'Stone',
  'Steel',
  'Dark',
  'Ghost',
  'Psychic',
  'Spirit',
  'Rock',
  'Fighting',
  'Flying',
  'Ice',
  'Ground',
  'Grass',
  'Electric',
  'Poison',
  'Light',
  'Dragon',
  'Time',
  'Cosmic',
];

export const MONSTER_RARITY: Option<MonsterCardRarityFilter>[] = [
  {
    value: '',
    label: 'All rarity',
  },
  {
    value: 'Legendary',
    label: 'Legendary',
  },
  {
    value: 'Rare',
    label: 'Rare',
  },
  {
    value: 'Normal',
    label: 'Normal',
  },
];

export const MONSTER_STATS_SORT: Option<MonsterCardStatFilter>[] = [
  { value: '', label: 'Any stat' },
  {
    value: 'Hp',
    label: 'Hp',
  },
  {
    value: 'Attack',
    label: 'Attack',
  },
  {
    value: 'Defense',
    label: 'Defense',
  },
  {
    value: 'SpecialAttack',
    label: 'SpecialAttack',
  },
  {
    value: 'SpecialSpell',
    label: 'SpecialSpell',
  },
  {
    value: 'Speed',
    label: 'Speed',
  },
];
