'use client';

import { NullableMonsterCard } from '@/types/monster';
import MonsterCard from '../cards/monster-card';
import SectionHeader from './section-header';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import DotPagination from '../ui/dot-pagination';

type Props = {
  monstersSummary: NullableMonsterCard[];
};

export default function FeaturedSection({ monstersSummary }: Props) {
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

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };
  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

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

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Featured Monsters"
        carouselControls={{
          leftControl: scrollPrev,
          rightControl: scrollNext,
        }}
        hrefUrl=""
      />
      <div ref={emblaRef} className={`w-full overflow-hidden`}>
        <div className="-ml-8 flex">
          {monstersSummary.map((monsterSummary) => {
            return (
              <div key={monsterSummary.id} className="flex-[0_0_33.333%] pl-8">
                <MonsterCard monsterCard={monsterSummary} />
              </div>
            );
          })}
        </div>
      </div>
      <DotPagination selectedSnap={selectedIndex} scrollSnaps={scrollSnaps} />
    </div>
  );
}
