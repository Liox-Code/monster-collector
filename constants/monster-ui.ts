import {
  Flame,
  Droplet,
  Wind,
  Mountain,
  Shield,
  Moon,
  Ghost,
  Brain,
  Sparkles,
  Gem,
  Swords,
  Feather,
  Snowflake,
  Layers,
  Leaf,
  Zap,
  Skull,
  Sun,
  Crown,
  Hourglass,
  Orbit,
} from 'lucide-react';
import { BaseBadgeConfig, MonsterBadgeLabel, MonsterTypeConfig, TeamState } from '../types/monster';
import { MonsterCardRarity, MonsterCardTypes } from '@/lib/schemas/monster';

export const MONSTER_RARITY_CONFIG: Record<MonsterCardRarity, BaseBadgeConfig> = {
  legendary: {
    label: 'Legendary',
    className: 'bg-yellow-500/15 text-yellow-400 ring-1 ring-inset ring-yellow-500/30',
  },
  rare: {
    label: 'Rare',
    className: 'bg-violet-500/15 text-violet-400 ring-1 ring-inset ring-violet-500/30',
  },
  normal: {
    label: 'Normal',
    className: 'bg-neutral-500/15 text-neutral-300 ring-1 ring-inset ring-neutral-500/30',
  },
};

export const MONSTER_STATE_CONFIG: Record<TeamState, BaseBadgeConfig> = {
  private: {
    label: 'Private',
    className: 'bg-primary-800/20 ring-2 ring-inset ring-primary-400/30 text-primary-400',
  },
  public: { label: 'Public', className: '' },
};

export const MONSTER_TYPE_CONFIG: Record<MonsterCardTypes, MonsterTypeConfig> = {
  fire: {
    label: 'Fire',
    icon: Flame,
    className: 'bg-orange-500/15 text-orange-400 ring-1 ring-inset ring-orange-500/30',
  },
  water: {
    label: 'Water',
    icon: Droplet,
    className: 'bg-blue-500/15 text-blue-400 ring-1 ring-inset ring-blue-500/30',
  },
  wind: {
    label: 'Wind',
    icon: Wind,
    className: 'bg-cyan-500/15 text-cyan-300 ring-1 ring-inset ring-cyan-500/30',
  },
  stone: {
    label: 'Stone',
    icon: Mountain,
    className: 'bg-amber-700/15 text-amber-500 ring-1 ring-inset ring-amber-600/30',
  },
  steel: {
    label: 'Steel',
    icon: Shield,
    className: 'bg-slate-500/15 text-slate-300 ring-1 ring-inset ring-slate-500/30',
  },
  dark: {
    label: 'Dark',
    icon: Moon,
    className: 'bg-neutral-800/40 text-neutral-300 ring-1 ring-inset ring-neutral-600/40',
  },
  ghost: {
    label: 'Ghost',
    icon: Ghost,
    className: 'bg-indigo-900/30 text-indigo-300 ring-1 ring-inset ring-indigo-500/30',
  },
  psychic: {
    label: 'Psychic',
    icon: Brain,
    className: 'bg-pink-500/15 text-pink-400 ring-1 ring-inset ring-pink-500/30',
  },
  spirit: {
    label: 'Spirit',
    icon: Sparkles,
    className: 'bg-fuchsia-500/15 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/30',
  },
  rock: {
    label: 'Rock',
    icon: Gem,
    className: 'bg-stone-500/15 text-stone-400 ring-1 ring-inset ring-stone-500/30',
  },
  fighting: {
    label: 'Fighting',
    icon: Swords,
    className: 'bg-red-700/15 text-red-400 ring-1 ring-inset ring-red-600/30',
  },
  flying: {
    label: 'Flying',
    icon: Feather,
    className: 'bg-sky-400/15 text-sky-300 ring-1 ring-inset ring-sky-400/30',
  },
  ice: {
    label: 'Ice',
    icon: Snowflake,
    className: 'bg-teal-400/15 text-teal-300 ring-1 ring-inset ring-teal-400/30',
  },
  ground: {
    label: 'Ground',
    icon: Layers,
    className: 'bg-yellow-700/15 text-yellow-600 ring-1 ring-inset ring-yellow-600/30',
  },
  grass: {
    label: 'Grass',
    icon: Leaf,
    className: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/30',
  },
  electric: {
    label: 'Electric',
    icon: Zap,
    className: 'bg-yellow-400/15 text-yellow-300 ring-1 ring-inset ring-yellow-400/30',
  },
  poison: {
    label: 'Poison',
    icon: Skull,
    className: 'bg-purple-500/15 text-purple-400 ring-1 ring-inset ring-purple-500/30',
  },
  light: {
    label: 'Light',
    icon: Sun,
    className: 'bg-amber-300/15 text-amber-200 ring-1 ring-inset ring-amber-300/30',
  },
  dragon: {
    label: 'Dragon',
    icon: Crown,
    className: 'bg-violet-600/15 text-violet-400 ring-1 ring-inset ring-violet-500/30',
  },
  time: {
    label: 'Time',
    icon: Hourglass,
    className: 'bg-rose-500/15 text-rose-300 ring-1 ring-inset ring-rose-500/30',
  },
  cosmic: {
    label: 'Cosmic',
    icon: Orbit,
    className: 'bg-sky-900/40 text-sky-200 ring-1 ring-inset ring-sky-400/30',
  },
};

export const MONSTER_BADGE_STYLE: Record<MonsterBadgeLabel, BaseBadgeConfig> = {
  ...MONSTER_RARITY_CONFIG,
  ...MONSTER_STATE_CONFIG,
  ...MONSTER_TYPE_CONFIG,
};

export const MONSTER_TEAM_MAX_SIZE = 6;
