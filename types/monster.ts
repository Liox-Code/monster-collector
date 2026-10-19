import { DeepNullableExceptId } from './utility';

export type MonsterCardTypes = 'Fire' | 'Water' | 'Wind' | 'Stone' | 'Steel';

export type MonsterCardRarity = 'Legendary' | 'Rare' | 'Normal';

export type TeamState = 'Public' | 'Private';

export type MonsterBadgeLabel = MonsterCardTypes | MonsterCardRarity | TeamState;

export type MonsterCardStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialSpell: number;
  speed: number;
};

export type MonsterCardStatsDisplay = {
  key: keyof MonsterCardStats;
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
  favorite: boolean;
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

export type NullableMonsterTeam = DeepNullableExceptId<MonsterTeam, 'teamId'>;
