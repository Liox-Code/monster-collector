import { Search, X } from 'lucide-react';

type SearchInputFieldProps = { placeholder?: string };

export default function SearchInputField({ placeholder }: SearchInputFieldProps) {
  return (
    <div className="bg-surface-3 text-primary-200 grid h-full w-full grid-cols-[auto_1fr_auto] items-center rounded-lg">
      <button className="flex aspect-square h-full cursor-pointer items-center justify-center">
        <Search />
      </button>
      <input
        placeholder={placeholder}
        className={`placeholder:text-primary-300/50 w-full rounded-lg bg-transparent text-xl outline-none`}
      />
      <button className="hover:text-primary-100 flex aspect-square h-full cursor-pointer items-center justify-center">
        <X className="size-5" />
      </button>
    </div>
  );
}
