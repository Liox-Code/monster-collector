'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import CustomPagination from '../ui/custom-pagination';
import { MonsterFilters } from '@/lib/schemas/monster';

type MonsterPaginationBarProps = Pick<MonsterFilters, 'page'> & { totalPages: number };

export default function MonsterPaginationBar({ page, totalPages }: MonsterPaginationBarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const selectedPage = Math.max(1, Number(page)) || 1;

  const handlePage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);

    const selectedPage = page.toString();

    if (selectedPage) {
      newParams.set('page', selectedPage);
    } else {
      newParams.delete('page');
    }

    replace(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="bg-surface-3 flex w-full items-center justify-center rounded-xl py-4">
      <div className="h-8">
        <CustomPagination totalPages={totalPages} page={selectedPage} onPageChange={handlePage} />
      </div>
    </div>
  );
}
