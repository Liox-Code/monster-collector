type Props = {
  selectedSnap: number;
  scrollSnaps: number[];
};

export default function DotPagination({ selectedSnap, scrollSnaps }: Props) {
  return (
    <div className="flex h-3 w-full items-center justify-center">
      <div className="flex h-full flex-row gap-3">
        {scrollSnaps.map((_, index) => {
          const isActive = index === selectedSnap;

          return (
            <span
              key={index}
              className={`h-full rounded-full transition-all duration-600 ${isActive ? 'bg-primary-500 aspect-3/1' : 'bg-surface-2 aspect-square'}`}
            />
          );
        })}
      </div>
    </div>
  );
}
