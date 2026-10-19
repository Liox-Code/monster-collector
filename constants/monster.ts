import { MonsterCardStats } from '@/types/monster';

export const MONSTER_STAT_MAX = 250;

export const MONSTER_STAT_LABELS: Record<keyof MonsterCardStats, string> = {
  hp: 'Health Points',
  attack: 'Attack',
  defense: 'Defense',
  specialAttack: 'Special Attack',
  specialSpell: 'Special Spell',
  speed: 'Speed',
};

export const MONSTER_STAT_SHORT_LABELS: Record<keyof MonsterCardStats, string> = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  specialAttack: 'SP.ATK',
  specialSpell: 'SP.SPL',
  speed: 'SPD',
};
