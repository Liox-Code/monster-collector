import {
  MonsterBadgeLabel,
  MonsterCardRarity,
  MonsterCardTypes,
  TeamState,
} from '../types/monster';

export const MONSTER_RARITY_STYLES: Record<MonsterCardRarity, string> = {
  Legendary: 'bg-yellow-500/15 text-yellow-400 ring-1 ring-inset ring-yellow-500/30',
  Rare: 'bg-violet-500/15 text-violet-400 ring-1 ring-inset ring-violet-500/30',
  Normal: 'bg-neutral-500/15 text-neutral-300 ring-1 ring-inset ring-neutral-500/30',
};

export const MONSTER_TYPES_STYLES: Record<MonsterCardTypes, string> = {
  Fire: 'bg-orange-500/15 text-orange-400 ring-1 ring-inset ring-orange-500/30',
  Water: 'bg-blue-500/15 text-blue-400 ring-1 ring-inset ring-blue-500/30',
  Wind: 'bg-cyan-500/15 text-cyan-300 ring-1 ring-inset ring-cyan-500/30',
  Stone: 'bg-amber-700/15 text-amber-500 ring-1 ring-inset ring-amber-600/30',
  Steel: 'bg-slate-500/15 text-slate-300 ring-1 ring-inset ring-slate-500/30',
};

export const MONSTER_STATE_STYLES: Record<TeamState, string> = {
  Private: 'bg-primary-800/20 ring-2 ring-inset ring-primary-400/30 text-primary-400',
  Public: '',
};

export const MONSTER_BADGE_STYLE: Record<MonsterBadgeLabel, string> = {
  ...MONSTER_RARITY_STYLES,
  ...MONSTER_TYPES_STYLES,
  ...MONSTER_STATE_STYLES,
};

export const MONSTER_TEAM_MAX_SIZE = 6;
