import FeaturedSection from '@/components/sections/featured-section';
import HeroSection from '@/components/sections/hero-section';
import MetricList from '@/components/sections/metric-list';
import TrendingTeamsList from '@/components/sections/trending-teams-list';
import Button from '@/components/ui/button';
import { API_BASE_URL } from '@/config/constants';
import type { MonsterSummary, NullableMonsterTeam } from '@/types/monster';
import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '850+', label: 'Total Monster' },
  { value: '1,240', label: 'Total Teams' },
  { value: '3,800+', label: 'Active Users' },
];

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
      <div className="grid grid-flow-row auto-rows-max gap-10">
        <HeroSection
          title="Collect & Assemble Battle Teams"
          description="Discover, analyze, and build competitive monster rosters with real-time stats and community synergies."
        />

        <div className="grid auto-cols-max grid-flow-col gap-4">
          <Button label="Explore Monsters" endIcon={<ArrowRight className="size-5" />} size="md" />
          <Button label="Build a Team" variant="secondary" size="md" />
        </div>
        <MetricList metrics={metrics} />
      </div>
      <FeaturedSection monstersSummary={monsterCardsTest} />
      <TrendingTeamsList monsterTeams={monsterTeams} />
    </>
  );
}
