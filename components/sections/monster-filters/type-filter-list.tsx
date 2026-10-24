'use client';

import { ALL_TYPE_FILTER, MONSTER_TYPES } from '@/constants/monster';

type TypeFilterListProps = {
  selectedTypes: string[];
  onTypeChange: (value: string[]) => void;
};

export default function TypeFilterList({ selectedTypes, onTypeChange }: TypeFilterListProps) {
  const handleToggle = (type: string) => {
    const lowerType = type.toLowerCase();

    let updatedSelectedTypes: string[] = [];

    if (selectedTypes.includes(ALL_TYPE_FILTER.toLowerCase())) {
      updatedSelectedTypes = [lowerType];
    } else if (selectedTypes.includes(lowerType)) {
      updatedSelectedTypes = selectedTypes.filter((selectedType) => selectedType !== lowerType);
    } else {
      updatedSelectedTypes = [...selectedTypes, lowerType];
    }

    onTypeChange(updatedSelectedTypes);
  };

  return (
    <div className="inline-flex flex-wrap gap-2">
      {MONSTER_TYPES.map((monsterType) => {
        const isAllSelected =
          selectedTypes.includes(ALL_TYPE_FILTER) && monsterType.toLowerCase() === ALL_TYPE_FILTER;
        const isSelected = selectedTypes.includes(monsterType.toLowerCase()) || isAllSelected;

        return (
          <button
            key={monsterType}
            onClick={() => handleToggle(monsterType)}
            className={`cursor-pointer rounded-lg px-3 py-2 text-xl ring-1 ring-inset ${isSelected ? 'bg-primary-500 text-secondary-900' : 'bg-surface-2 text-primary-200 ring-primary-300/10'}`}
          >
            {monsterType}
          </button>
        );
      })}
    </div>
  );
}
