import { NextRequest, NextResponse } from 'next/server';
import { monsterCardsTest } from '../data/monster';
import { MAX_FAVORITE_LIMIT } from '@/constants/monster';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const favoriteQuery = searchParams.get('favorite');

  const filteredMonsterCards =
    favoriteQuery === 'true'
      ? monsterCardsTest
          .sort((a, b) => b.favoriteCount - a.favoriteCount)
          .slice(0, MAX_FAVORITE_LIMIT)
      : monsterCardsTest;

  return NextResponse.json(filteredMonsterCards);
}
