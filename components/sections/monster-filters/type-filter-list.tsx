'use client';

import { MONSTER_TYPE_CONFIG } from '@/constants/monster-ui';

type TypeFilterListProps = {
  selectedTypes: string[];
  onTypeChange: (value: string[]) => void;
};

export default function TypeFilterList({ selectedTypes, onTypeChange }: TypeFilterListProps) {
  const handleToggle = (type: string) => {
    let updatedSelectedTypes: string[] = [];

    if (selectedTypes.includes(type)) {
      updatedSelectedTypes = selectedTypes.filter((selectedType) => selectedType !== type);
    } else {
      updatedSelectedTypes = [...selectedTypes, type];
    }

    onTypeChange(updatedSelectedTypes);
  };
  const isAllSelected = selectedTypes.length === 0;

  return (
    <div className="inline-flex flex-wrap gap-2">
      <button
        onClick={() => onTypeChange([])}
        className={`cursor-pointer rounded-lg px-3 py-2 text-xl ring-1 ring-inset ${isAllSelected ? 'bg-primary-500 text-secondary-900' : 'bg-surface-2 text-primary-200 ring-primary-300/10'}`}
      >
        All
      </button>
      {Object.entries(MONSTER_TYPE_CONFIG).map(([key, value]) => {
        const isSelected = selectedTypes.includes(key);

        return (
          <button
            key={key}
            onClick={() => handleToggle(key)}
            className={`cursor-pointer rounded-lg px-3 py-2 text-xl ring-1 ring-inset ${isSelected ? 'bg-primary-500 text-secondary-900' : 'bg-surface-2 text-primary-200 ring-primary-300/10'}`}
          >
            {value.label}
          </button>
        );
      })}
    </div>
  );
}
