import { NextRequest, NextResponse } from 'next/server';
import { monsterCardsTest } from '../data/monster';
import { MAX_FAVORITE_LIMIT, MAX_MONSTERS_PER_PAGE } from '@/constants/monster';
import { parseMonsterFilters } from '@/lib/monster';
import { MonsterFilters } from '@/lib/schemas/monster';
import { MonsterSummary } from '@/types/monster';

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

export function filterMonsters(filters: MonsterFilters) {
  const { type, favorite, rarity, stat, search }: MonsterFilters = filters;

  const predicates: Array<(monsterCard: MonsterSummary) => boolean> = [];

  const searchText = search ? normalize(search) : '';
  if (searchText) {
    predicates.push(
      (monsterCard) =>
        normalize(monsterCard.monsterName).includes(searchText) ||
        normalize(monsterCard.description).includes(searchText) ||
        normalize(monsterCard.combatRole).includes(searchText)
    );
  }
  if (rarity) predicates.push((monsterCard) => monsterCard.rarity === rarity);
  if (type.length >= 1)
    predicates.push((monsterCard) => type.some((type) => monsterCard.types.includes(type)));

  let result = [...monsterCardsTest];

  if (predicates.length >= 1)
    result = result.filter((monsterCard) =>
      predicates.every((predicate) => predicate(monsterCard))
    );

  if (favorite)
    result = result.sort((a, b) => a.favoriteCount - b.favoriteCount).slice(0, MAX_FAVORITE_LIMIT);

  if (stat) result = result.sort((a, b) => a.stats[stat] - b.stats[stat]);

  return result;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const filters = parseMonsterFilters(searchParams);
  const monsters = filterMonsters(filters);

  const totalMonsters = monsters.length;
  const totalPages = Math.ceil(totalMonsters / MAX_MONSTERS_PER_PAGE);
  const startPage = (filters.page - 1) * MAX_MONSTERS_PER_PAGE;
  const endPage = filters.page * MAX_MONSTERS_PER_PAGE;

  const result = {
    totalPages: totalPages,
    totalMonsters: totalMonsters,
    data: monsters.slice(startPage, endPage),
  };

  return NextResponse.json(result);
}
