import FeaturedSection from '@/components/sections/featured-section';
import HeroSection from '@/components/sections/hero-section';
import TrendingTeamsList from '@/components/sections/trending-teams-list';
import { API_BASE_URL } from '@/config/constants';
import type { MonsterSummary, NullableMonsterTeam } from '@/types/monster';

export default async function Home() {
  async function getFavoriteMonsters(): Promise<MonsterSummary[]> {
    const res = await fetch(`${API_BASE_URL}/api/monster-cards?favorite=true`);

    if (!res.ok) throw new Error('Failed to fetch monsters.');

    return await res.json();
  }

  async function getMonsterTeams(): Promise<NullableMonsterTeam[]> {
    const res = await fetch(`${API_BASE_URL}/api/monster-teams?favorite=true`);

    if (!res.ok) throw new Error('Failed to fetch monsters.');

    return await res.json();
  }

  const monsterCardsTest = await getFavoriteMonsters();

  const monsterTeams: NullableMonsterTeam[] = await getMonsterTeams();

  return (
    <>
      <HeroSection />
      <FeaturedSection monstersSummary={monsterCardsTest} />
      <TrendingTeamsList monsterTeams={monsterTeams} />
    </>
  );
}
