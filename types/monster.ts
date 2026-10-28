import { MonsterCardRarity, MonsterCardTypes } from '@/lib/schemas/monster';
import { DeepNullableExceptId } from './utility';
import { LucideIcon } from 'lucide-react';

export type TeamState = 'public' | 'private';

export type MonsterBadgeLabel = MonsterCardTypes | MonsterCardRarity | TeamState;

export type MonsterCardStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialSpell: number;
  speed: number;
};

export type MonsterCardStatKey = keyof MonsterCardStats;

export type MonsterCardStatsDisplay = {
  key: MonsterCardStatKey;
  label: string;
  shortLabel: string;
  value: number;
};

export type MonsterSummary = {
  id: string;
  cardNumber: number;
  monsterName: string;
  combatRole: string;
  description: string;
  level: string;
  favoriteCount: number;
  imageUrl: string;
  types: MonsterCardTypes[];
  rarity: MonsterCardRarity;
  stats: MonsterCardStats;
};

export type NullableMonsterCard = DeepNullableExceptId<MonsterSummary, 'id'>;

export type CompactMonsterSummary = Pick<
  MonsterSummary,
  'id' | 'monsterName' | 'level' | 'imageUrl' | 'types'
>;

export type NullableCompactMonsterCard = DeepNullableExceptId<CompactMonsterSummary, 'id'>;

export type MonsterTeam = {
  teamId: string;
  title: string;
  description: string;
  userId: string;
  monsters: CompactMonsterSummary[];
  likes: number;
  state: TeamState;
};

export type NullableMonsterTeam = DeepNullableExceptId<MonsterTeam, 'teamId' | 'userId'>;

export type BaseBadgeConfig = {
  label: string;
  className: string;
};

export type MonsterTypeConfig = BaseBadgeConfig & {
  icon: LucideIcon;
};

export type MonsterTypeResponse<T> = {
  totalPages: number;
  totalMonsters: number;
  data: T;
};
