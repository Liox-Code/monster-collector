import z from 'zod';

export const monsterCardStats = z.enum([
  'hp',
  'attack',
  'defense',
  'specialAttack',
  'specialSpell',
  'speed',
]);
export type MonsterCardStat = z.infer<typeof monsterCardStats>;

export const monsterCardRarity = z.enum(['legendary', 'rare', 'normal']);
export type MonsterCardRarity = z.infer<typeof monsterCardRarity>;

export const monsterCardTypes = z.enum([
  'fire',
  'water',
  'wind',
  'stone',
  'steel',
  'dark',
  'ghost',
  'psychic',
  'spirit',
  'rock',
  'fighting',
  'flying',
  'ice',
  'ground',
  'grass',
  'electric',
  'poison',
  'light',
  'dragon',
  'time',
  'cosmic',
]);
export type MonsterCardTypes = z.infer<typeof monsterCardTypes>;

export const monsterFilterSchema = z.object({
  type: z
    .array(z.string())
    .catch([])
    .transform((typeArray) => {
      return typeArray.filter(
        (type): type is MonsterCardTypes => monsterCardTypes.safeParse(type).success
      );
    }),
  rarity: monsterCardRarity.optional().catch(undefined),
  page: z.coerce.number().int().min(1).max(500).catch(1),
  stat: monsterCardStats.optional().catch(undefined),
  favorite: z.boolean().optional().catch(false),
});

export type MonsterFilters = z.infer<typeof monsterFilterSchema>;
