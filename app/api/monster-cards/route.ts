import { NextRequest, NextResponse } from 'next/server';
import { monsterCardsTest } from '../data/monster';
import { MAX_FAVORITE_LIMIT, MAX_MONSTERS_PER_PAGE } from '@/constants/monster';
import { parseMonsterFilters } from '@/lib/monster';
import { MonsterFilters } from '@/lib/schemas/monster';

export function filterMonsters(filters: MonsterFilters) {
  const { type, favorite, rarity, stat } = filters;

  let filteredMonsterCards = monsterCardsTest;

  filteredMonsterCards = favorite
    ? filteredMonsterCards
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, MAX_FAVORITE_LIMIT)
    : filteredMonsterCards;

  filteredMonsterCards = rarity
    ? filteredMonsterCards.filter((monsterCard) => {
        return monsterCard.rarity === rarity;
      })
    : filteredMonsterCards;

  filteredMonsterCards = stat
    ? filteredMonsterCards.sort((a, b) => b.stats[stat] - a.stats[stat])
    : filteredMonsterCards;

  filteredMonsterCards =
    type.length >= 1
      ? filteredMonsterCards.filter((monsterCard) => {
          return type.some((type) => monsterCard.types.includes(type));
        })
      : filteredMonsterCards;

  return filteredMonsterCards;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const filters = parseMonsterFilters(searchParams);
  const monsters = filterMonsters(filters);

  const totalMonsters = monsters.length;
  const totalPages = Math.ceil(totalMonsters / MAX_MONSTERS_PER_PAGE);
  const startPage = (filters.page - 1) * MAX_MONSTERS_PER_PAGE;
  const endPage = startPage + MAX_MONSTERS_PER_PAGE;

  const result = {
    totalPages: totalPages,
    totalMonsters: totalMonsters,
    data: monsters.slice(startPage, endPage),
  };

  return NextResponse.json(result);
}
