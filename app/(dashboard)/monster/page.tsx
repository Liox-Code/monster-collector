import { fetchWithParams } from '@/lib/fetch-with-params';
import HeroSection from '@/components/sections/hero-section';
import MonsterCardGrid from '@/components/sections/monster-card-grid';
import MonsterFiltersBar from '@/components/sections/monster-filters-bar';
import MonsterPaginationBar from '@/components/sections/monster-pagination-bar';
import { buildMonsterQuery, parseMonsterFilters } from '@/lib/monster';
import { MonsterSummary, MonsterTypeResponse } from '@/types/monster';
import { MonsterFilters } from '@/lib/schemas/monster';
import { URLParams } from '@/lib/url-params';

type MonsterTypes = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function getMonsters(
  monsterFilters: MonsterFilters
): Promise<MonsterTypeResponse<MonsterSummary[]>> {
  try {
    const monsters = await fetchWithParams<MonsterTypeResponse<MonsterSummary[]>>(
      '/api/monster-cards',
      buildMonsterQuery(monsterFilters)
    );
    return monsters;
  } catch (error) {
    console.error('Failed to fetch monsters', error);
    return { data: [], totalMonsters: 0, totalPages: 0 };
  }
}

export default async function Monster({ searchParams }: MonsterTypes) {
  const params = URLParams(await searchParams);
  const monsterFilters = parseMonsterFilters(params);

  const monsters = await getMonsters(monsterFilters);

  return (
    <div className="flex w-full flex-col gap-10">
      <HeroSection
        title="Monster Compendium"
        description="Explore, filter, and analyze combat data across all 852 indexed creatures."
      />
      <MonsterFiltersBar
        type={monsterFilters.type}
        stat={monsterFilters.stat}
        rarity={monsterFilters.rarity}
      />
      <MonsterCardGrid monsterCards={monsters.data} />
      <MonsterPaginationBar page={monsterFilters.page} totalPages={monsters.totalPages} />
    </div>
  );
}
