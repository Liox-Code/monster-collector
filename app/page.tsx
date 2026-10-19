import MonsterTeam from '@/components/cards/monster-team';
import FeaturedSection from '@/components/sections/featured-section';
import HeroSection from '@/components/sections/hero-section';
import TrendingTeamsList from '@/components/sections/trending-teams-list';
import type { MonsterSummary, NullableMonsterTeam } from '@/types/monster';

export default function Home() {
  const monsterCardsTest: MonsterSummary[] = [
    {
      id: '1',
      cardNumber: 6,
      monsterName: 'Ignisaur',
      level: '92',
      favorite: false,
      imageUrl: '/monsters/ignisaur.png',
      types: ['Fire', 'Steel'],
      rarity: 'Legendary',
      combatRole: 'Frontline Breaker',
      description:
        'A volcanic battle monster built for prolonged fights and heavy frontline pressure.',
      stats: {
        hp: 120,
        attack: 145,
        defense: 110,
        specialAttack: 135,
        specialSpell: 102,
        speed: 105,
      },
    },
    {
      id: '2',
      cardNumber: 6,
      monsterName: 'Segundo',
      level: '92',
      favorite: false,
      imageUrl: '/monsters/ignisaur.png',
      types: ['Fire', 'Steel'],
      rarity: 'Legendary',
      combatRole: 'Frontline Breaker',
      description:
        'A volcanic battle monster built for prolonged fights and heavy frontline pressure.',
      stats: {
        hp: 120,
        attack: 145,
        defense: 110,
        specialAttack: 135,
        specialSpell: 102,
        speed: 105,
      },
    },
    {
      id: '3',
      cardNumber: 6,
      monsterName: 'Tercero',
      level: '92',
      favorite: false,
      imageUrl: '/monsters/ignisaur.png',
      types: ['Fire', 'Steel'],
      rarity: 'Legendary',
      combatRole: 'Frontline Breaker',
      description:
        'A volcanic battle monster built for prolonged fights and heavy frontline pressure.',
      stats: {
        hp: 120,
        attack: 145,
        defense: 110,
        specialAttack: 135,
        specialSpell: 102,
        speed: 105,
      },
    },
    {
      id: '4',
      cardNumber: 6,
      monsterName: 'Cuarto',
      level: '92',
      favorite: false,
      imageUrl: '/monsters/ignisaur.png',
      types: ['Fire', 'Steel'],
      rarity: 'Legendary',
      combatRole: 'Frontline Breaker',
      description:
        'A volcanic battle monster built for prolonged fights and heavy frontline pressure.',
      stats: {
        hp: 120,
        attack: 145,
        defense: 110,
        specialAttack: 135,
        specialSpell: 102,
        speed: 105,
      },
    },
    {
      id: '5',
      cardNumber: 6,
      monsterName: 'Quinto',
      level: '92',
      favorite: false,
      imageUrl: '/monsters/ignisaur.png',
      types: ['Fire', 'Steel'],
      rarity: 'Legendary',
      combatRole: 'Frontline Breaker',
      description:
        'A volcanic battle monster built for prolonged fights and heavy frontline pressure.',
      stats: {
        hp: 120,
        attack: 145,
        defense: 110,
        specialAttack: 135,
        specialSpell: 102,
        speed: 105,
      },
    },
    {
      id: '6',
      cardNumber: 6,
      monsterName: 'Sexto',
      level: '92',
      favorite: false,
      imageUrl: '/monsters/ignisaur.png',
      types: ['Fire', 'Steel'],
      rarity: 'Legendary',
      combatRole: 'Frontline Breaker',
      description:
        'A volcanic battle monster built for prolonged fights and heavy frontline pressure.',
      stats: {
        hp: 120,
        attack: 145,
        defense: 110,
        specialAttack: 135,
        specialSpell: 102,
        speed: 105,
      },
    },
  ];

  const monsterTeam: NullableMonsterTeam = {
    teamId: 'TEAM-001',
    userId: 'USER-001',
    title: 'Titulo',
    description: 'This is the description.',
    likes: 300,
    monsters: monsterCardsTest.slice(0, 6).map((monsterCard) => {
      return {
        id: monsterCard.id,
        imageUrl: monsterCard.imageUrl,
        level: monsterCard.level,
        monsterName: monsterCard.monsterName,
        types: monsterCard.types,
      };
    }),
    state: 'Private',
  };

  const monsterTeams: NullableMonsterTeam[] = Array.from({ length: 5 }, (_, index) => {
    const newMonsterTeam = { ...monsterTeam, teamId: `TEAM-00${index}` };

    return newMonsterTeam;
  });

  return (
    <>
      <HeroSection />
      <FeaturedSection monstersSummary={monsterCardsTest} />
      <TrendingTeamsList monsterTeams={monsterTeams} />
    </>
  );
}
