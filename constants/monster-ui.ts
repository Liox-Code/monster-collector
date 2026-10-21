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
  Dark: 'bg-neutral-800/40 text-neutral-300 ring-1 ring-inset ring-neutral-600/40',
  Ghost: 'bg-indigo-900/30 text-indigo-300 ring-1 ring-inset ring-indigo-500/30',
  Psychic: 'bg-pink-500/15 text-pink-400 ring-1 ring-inset ring-pink-500/30',
  Spirit: 'bg-fuchsia-500/15 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/30',
  Rock: 'bg-stone-500/15 text-stone-400 ring-1 ring-inset ring-stone-500/30',
  Fighting: 'bg-red-700/15 text-red-400 ring-1 ring-inset ring-red-600/30',
  Flying: 'bg-sky-400/15 text-sky-300 ring-1 ring-inset ring-sky-400/30',
  Ice: 'bg-teal-400/15 text-teal-300 ring-1 ring-inset ring-teal-400/30',
  Ground: 'bg-yellow-700/15 text-yellow-600 ring-1 ring-inset ring-yellow-600/30',
  Grass: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/30',
  Electric: 'bg-yellow-400/15 text-yellow-300 ring-1 ring-inset ring-yellow-400/30',
  Poison: 'bg-purple-500/15 text-purple-400 ring-1 ring-inset ring-purple-500/30',
  Light: 'bg-amber-300/15 text-amber-200 ring-1 ring-inset ring-amber-300/30',
  Dragon: 'bg-violet-600/15 text-violet-400 ring-1 ring-inset ring-violet-500/30',
  Time: 'bg-rose-500/15 text-rose-300 ring-1 ring-inset ring-rose-500/30',
  Cosmic: 'bg-sky-900/40 text-sky-200 ring-1 ring-inset ring-sky-400/30',
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
