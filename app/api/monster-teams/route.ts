import { MAX_FAVORITE_LIMIT } from '@/constants/monster';
import { monsterTeams } from '../data/monster';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const favoriteQuery = searchParams.get('favorite');

  const filteredMonsterCards =
    favoriteQuery === 'true'
      ? monsterTeams
          .sort((a, b) => (a.likes && b.likes ? b.likes - a.likes : 0))
          .slice(0, MAX_FAVORITE_LIMIT)
      : monsterTeams;

  console.log('filteredMonsterCards', filteredMonsterCards);

  return NextResponse.json(filteredMonsterCards);
}
