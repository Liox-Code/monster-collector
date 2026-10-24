import HeroSection from '@/components/sections/hero-section';
import MonsterFiltersBar from '@/components/sections/monster-filters-bar';

export default function Monster() {
  return (
    <div>
      <HeroSection
        title="Monster Compendium"
        description="Explore, filter, and analyze combat data across all 852 indexed creatures."
      />
      <MonsterFiltersBar />
    </div>
  );
}
