'use client';

import { NullableMonsterTeam } from '@/types/monster';
import MonsterTeam from '../cards/monster-team';
import SectionHeader from './section-header';
import useEmblaCarousel from 'embla-carousel-react';
import DotPagination from '../ui/dot-pagination';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  monsterTeams: NullableMonsterTeam[];
};

export default function TrendingTeamsList({ monsterTeams }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarouselState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    updateCarouselState();

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', updateCarouselState);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', updateCarouselState);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi?.scrollNext();
  };

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Trending Teams"
        carouselControls={{
          leftControl: scrollPrev,
          rightControl: scrollNext,
        }}
        hrefUrl=""
      />

      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="-ml-8 flex">
          {monsterTeams.map((monsterTeam) => {
            return (
              <div key={monsterTeam.teamId} className="flex-[0_0_50%] pl-8">
                <MonsterTeam key={monsterTeam.teamId} monsterTeam={monsterTeam} />
              </div>
            );
          })}
        </div>
      </div>

      <DotPagination selectedSnap={selectedIndex} scrollSnaps={scrollSnaps} />
    </div>
  );
}
