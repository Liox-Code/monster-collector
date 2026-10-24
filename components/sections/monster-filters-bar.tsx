'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import TypeFilterList from './monster-filters/type-filter-list';
import { ALL_TYPE_FILTER, MONSTER_RARITY, MONSTER_STATS_SORT } from '@/constants/monster';
import CustomSelect from '../ui/custom-select';
import { MonsterCardRarityFilter, MonsterCardStatFilter } from '@/types/monster';
import { ArrowUpDown, ChevronDown, RefreshCcw } from 'lucide-react';
import Button from '../ui/button';
import SearchInputField from '../ui/search-input-field';

export default function MonsterFiltersBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const selectedTypes = searchParams.getAll('type');
  const selectedRarity = searchParams.get('rarity') as MonsterCardRarityFilter;
  const selectedStat = searchParams.get('stat') as MonsterCardStatFilter;

  const handleToggle = (types: string[]) => {
    const allFilteredSelected = types.includes(ALL_TYPE_FILTER.toLowerCase());
    const newParams = new URLSearchParams(searchParams);

    newParams.delete('type');

    if (!allFilteredSelected) {
      types.forEach((type) => newParams.append('type', type));
    }

    if (allFilteredSelected) {
      newParams.append('type', ALL_TYPE_FILTER.toLowerCase());
    }

    replace(`${pathname}?${newParams.toString()}`);
  };

  const handleRarity = (rarity: MonsterCardRarityFilter) => {
    const newParams = new URLSearchParams(searchParams);

    if (rarity) {
      newParams.set('rarity', rarity);
    } else {
      newParams.delete('rarity');
    }

    replace(`${pathname}?${newParams.toString()}`);
  };

  const handleStat = (stat: Capitalize<MonsterCardStatFilter>) => {
    const newParams = new URLSearchParams(searchParams);

    if (stat) {
      newParams.set('stat', stat);
    } else {
      newParams.delete('stat');
    }

    replace(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="bg-surface-1 flex flex-col items-start justify-start gap-8 rounded-xl p-6">
      <div className="grid h-10 w-full grid-cols-[40rem_auto] justify-between gap-2">
        <SearchInputField placeholder="Search monsters..." />
        <div className="grid grid-flow-col grid-cols-[14rem_14rem_8rem] gap-4">
          <CustomSelect
            options={MONSTER_RARITY}
            value={selectedRarity}
            onChange={handleRarity}
            placeholder="Select rarity..."
            iconType={<ChevronDown />}
          />
          <CustomSelect
            options={MONSTER_STATS_SORT}
            value={selectedStat}
            onChange={handleStat}
            placeholder="Select rarity..."
            iconType={<ArrowUpDown />}
          />
          <Button
            startIcon={<RefreshCcw className="text-tertiary-400 size-5" />}
            label="Reset"
            variant="tertiary"
            size="auto"
          />
        </div>
      </div>
      <TypeFilterList selectedTypes={selectedTypes} onTypeChange={handleToggle} />
    </div>
  );
}
