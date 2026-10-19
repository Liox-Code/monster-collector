import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/button';

type CarouselControls = {
  rightControl: () => void;
  leftControl: () => void;
};

type Props = {
  title: string;
  hrefUrl: string;
  carouselControls?: CarouselControls;
};

export default function SectionHeader({ title, hrefUrl, carouselControls }: Props) {
  return (
    <div className="grid w-full auto-cols-max grid-flow-col items-center justify-between">
      <div className="inline-flex items-center gap-6">
        <h3 className="text-4xl font-semibold">{title}</h3>

        {carouselControls?.leftControl && carouselControls?.rightControl && (
          <div className="inline-flex h-full gap-3">
            <Button
              endIcon={<ChevronLeft />}
              variant="secondary"
              bordered
              shape="square"
              size="sm"
              onClick={carouselControls.leftControl}
              disabled={!Boolean(carouselControls.leftControl)}
            />
            <Button
              endIcon={<ChevronRight />}
              variant="secondary"
              bordered
              shape="square"
              size="sm"
              onClick={carouselControls.rightControl}
              disabled={!Boolean(carouselControls.rightControl)}
            />
          </div>
        )}
      </div>
      <Link
        href={hrefUrl}
        className="text-primary-300 grid auto-cols-max grid-flow-col items-center gap-1"
      >
        <span>View All</span>
        <ArrowRight className="size-5" />
      </Link>
    </div>
  );
}
