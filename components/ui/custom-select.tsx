'use client';

import * as Select from '@radix-ui/react-select';
import { Option } from '@/types/ui';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ReactNode } from 'react';

type CustomSelectProps<T extends string = string> = {
  value?: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  placeholder?: string;
  iconType?: ReactNode;
  disabled?: boolean;
  name?: string;
  ariaLabel?: string;
};

export default function CustomSelect<T extends string = string>({
  value,
  onChange,
  options,
  placeholder,
  iconType: IconType,
  disabled,
  name,
  ariaLabel,
}: CustomSelectProps<T>) {
  const safeValue = value ?? '';

  const scrollButtonClass =
    'text-primary-300 flex h-6 items-center justify-center pointer-events-none';

  return (
    <Select.Root value={safeValue} onValueChange={onChange} disabled={disabled} name={name}>
      <Select.Trigger
        aria-label={ariaLabel}
        className="bg-surface-3 [&>span]:text-primary-200 grid h-full min-h-12 w-full min-w-40 cursor-pointer grid-cols-[1fr_auto] items-center gap-2 rounded-lg px-4 focus:outline-none [&>span]:text-left [&>span]:text-xl"
      >
        <Select.Value placeholder={placeholder} className="truncate" />
        {IconType && <Select.Icon>{IconType}</Select.Icon>}
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="bg-surface-2 border-primary-300/20 z-50 min-w-[var(--radix-select-trigger-width)] overflow-y-auto rounded-lg border"
        >
          <Select.ScrollUpButton className={scrollButtonClass}>
            <ChevronUp className="size-6" />
          </Select.ScrollUpButton>
          <Select.Viewport className="max-h-[min(13rem,var(--radix-select-content-available-height))] w-full">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="hover:bg-primary-300/10 flex w-full cursor-pointer items-center justify-between px-4 py-3 text-xl outline-none select-none"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="size-5" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className={scrollButtonClass}>
            <ChevronDown className="size-6" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
