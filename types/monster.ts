import { DeepNullableExceptId } from './utility';

export type AllTypesFilter = 'All';

export type WithEmpty<T extends string> = T | '';

export type MonsterCardTypes =
  | 'Fire'
  | 'Water'
  | 'Wind'
  | 'Stone'
  | 'Steel'
  | 'Dark'
  | 'Ghost'
  | 'Psychic'
  | 'Spirit'
  | 'Rock'
  | 'Fighting'
  | 'Flying'
  | 'Ice'
  | 'Ground'
  | 'Grass'
  | 'Electric'
  | 'Poison'
  | 'Light'
  | 'Dragon'
  | 'Time'
  | 'Cosmic';

export type MonsterCardRarity = 'Legendary' | 'Rare' | 'Normal';
export type MonsterCardRarityFilter = WithEmpty<MonsterCardRarity>;

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

export type MonsterCardStatKey = keyof MonsterCardStats;
export type MonsterCardStatFilter = Capitalize<WithEmpty<MonsterCardStatKey>>;

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
