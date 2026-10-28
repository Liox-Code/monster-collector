'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Button, { ButtonProps } from './button';

type CustomPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

type PageItem = number | `gap-${number}`;

const getPages = (page: number, total: number): PageItem[] => {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);

  const sortedPages = [...new Set([1, page - 1, page, page + 1, total])]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const items: PageItem[] = [];

  sortedPages.forEach((page, index) => {
    if (page - sortedPages[index - 1] > 1) items.push(`gap-${page}`);

    items.push(page);
  });

  return items;
};

const baseButtonProps: ButtonProps = {
  size: 'auto',
  shape: 'square',
  variant: 'secondary',
};

export default function CustomPagination({
  page,
  totalPages,
  onPageChange,
}: CustomPaginationProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  const startEditing = () => {
    setDraft(String(page));
    setEditing(true);
  };

  const commit = () => {
    setEditing(false);
    if (draft === '') return;

    const nextPage = Math.min(totalPages, Math.max(1, Number(draft)));
    if (nextPage !== page) onPageChange(nextPage);
  };

  return (
    <nav className="flex h-full items-center justify-center gap-4" aria-label="Pagination">
      <Button
        {...baseButtonProps}
        startIcon={<ChevronLeft className="size-5" />}
        onClick={() => {
          onPageChange(page - 1);
        }}
        disabled={page <= 1}
      />
      {getPages(page, totalPages).map((item) => {
        if (typeof item === 'string') return <span key={item}>...</span>;

        if (item !== page)
          return (
            <Button
              {...baseButtonProps}
              key={item}
              label={item.toString()}
              onClick={() => {
                onPageChange(item);
              }}
            />
          );

        return editing ? (
          <input
            key={item}
            inputMode="numeric"
            value={draft}
            autoFocus
            aria-label={`Go to page, from 1 to ${totalPages}`}
            className="bg-primary-500 aspect-square h-full rounded-lg text-center text-xl text-neutral-900 outline-none"
            onChange={(e) => {
              setDraft(e.target.value.replace(/\D/g, ''));
            }}
            onFocus={(e) => {
              e.target.select();
            }}
            onBlur={() => {
              setEditing(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                commit();
              }
              if (e.key === 'Escape') {
                setEditing(false);
              }
            }}
          />
        ) : (
          <Button
            {...baseButtonProps}
            variant="primary"
            key={item}
            label={item.toString()}
            onClick={() => {
              startEditing();
            }}
          />
        );
      })}
      <Button
        {...baseButtonProps}
        startIcon={<ChevronRight className="size-5" />}
        onClick={() => {
          onPageChange(page + 1);
        }}
        disabled={page >= totalPages}
      />
    </nav>
  );
}
