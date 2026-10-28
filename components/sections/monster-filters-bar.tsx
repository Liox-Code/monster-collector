'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import TypeFilterList from './monster-filters/type-filter-list';
import { MONSTER_RARITY, MONSTER_STATS_SORT } from '@/constants/monster';
import CustomSelect from '../ui/custom-select';
import { ArrowUpDown, ChevronDown, RefreshCcw } from 'lucide-react';
import Button from '../ui/button';
import SearchInputField from '../ui/search-input-field';
import { type MonsterFilters } from '@/lib/schemas/monster';

type MonsterFilterBarProps = Pick<MonsterFilters, 'type' | 'rarity' | 'stat'>;

export default function MonsterFiltersBar({
  type: selectedTypes,
  rarity: selectedRarity,
  stat: selectedStat,
}: MonsterFilterBarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const updateParams = (mutate: (params: URLSearchParams) => void) => {
    const newParams = new URLSearchParams(searchParams);

    mutate(newParams);

    newParams.delete('page');

    const query = newParams.toString();
    replace(query ? `${pathname}?${query}` : pathname);
  };

  const handleTypes = (types: string[]) => {
    updateParams((params) => {
      params.delete('type');

      types.forEach((type) => {
        params.append('type', type);
      });
    });
  };

  const setParam = (key: 'stat' | 'rarity', value: string | null) => {
    updateParams((params) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
  };

  return (
    <div className="bg-surface-1 flex flex-col items-start justify-start gap-8 rounded-xl p-6">
      <div className="grid h-10 w-full grid-cols-[40rem_auto] justify-between gap-2">
        <SearchInputField placeholder="Search monsters..." />
        <div className="grid grid-flow-col grid-cols-[14rem_14rem_8rem] gap-4">
          <CustomSelect
            options={MONSTER_RARITY}
            value={selectedRarity}
            onChange={(value) => {
              setParam('rarity', value);
            }}
            placeholder="Select rarity..."
            iconType={<ChevronDown />}
            resetLabel="All rarities"
          />
          <CustomSelect
            options={MONSTER_STATS_SORT}
            value={selectedStat}
            onChange={(value) => {
              setParam('stat', value);
            }}
            placeholder="Select stat..."
            iconType={<ArrowUpDown />}
            resetLabel="Any stat"
          />
          <Button
            startIcon={<RefreshCcw className="text-tertiary-400 size-5" />}
            label="Reset"
            variant="tertiary"
            size="auto"
            onClick={() => {
              replace(pathname);
            }}
          />
        </div>
      </div>
      <TypeFilterList selectedTypes={selectedTypes} onTypeChange={handleTypes} />
    </div>
  );
}
