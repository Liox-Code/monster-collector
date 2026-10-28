import { fetchWithParams } from '@/lib/fetch-with-params';
import FeaturedSection from '@/components/sections/featured-section';
import HeroSection from '@/components/sections/hero-section';
import MetricList from '@/components/sections/metric-list';
import TrendingTeamsList from '@/components/sections/trending-teams-list';
import Button from '@/components/ui/button';
import type {
  MonsterTypeResponse,
  NullableMonsterCard,
  NullableMonsterTeam,
} from '@/types/monster';
import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '850+', label: 'Total Monster' },
  { value: '1,240', label: 'Total Teams' },
  { value: '3,800+', label: 'Active Users' },
];

export default async function Home() {
  async function getFavoriteMonsters(): Promise<NullableMonsterCard[]> {
    const response = await fetchWithParams<MonsterTypeResponse<NullableMonsterCard[]>>(
      '/api/monster-cards',
      'favorite=true'
    );

    return response.data;
  }

  async function getMonsterTeams(): Promise<NullableMonsterTeam[]> {
    const response = await fetchWithParams<NullableMonsterTeam[]>(
      '/api/monster-teams',
      'favorite=true'
    );

    return response;
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
