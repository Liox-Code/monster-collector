'use client';

import { Sizes, Variant } from '@/types/ui';
import { ReactNode, useEffect } from 'react';

type Shapes = 'rectangle' | 'square';
type SizeConfig = { rectangle: string; square: string; textSize: string };

type Props = {
  label?: string;
  variant?: Variant;
  bordered?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  shape?: Shapes;
  size?: Sizes;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  label,
  variant = 'primary',
  bordered = false,
  startIcon: StartIcon,
  endIcon: EndIcon,
  className,
  shape = 'rectangle',
  size = 'md',
  disabled = false,
  onClick,
}: Props) {
  const variants: Record<Variant, string> = {
    primary: 'bg-primary-500 text-neutral-900',
    secondary: 'bg-neutral-900 text-neutral-50',
  };

  const borderStyle: Record<Variant, string> = {
    primary: '',
    secondary: 'ring-primary-300/30  ring-1',
  };

  const sizes: Record<Sizes, SizeConfig> = {
    sm: {
      rectangle: 'px-3 h-8',
      square: 'aspect-square w-9 h-9',
      textSize: 'text-base',
    },
    md: {
      rectangle: 'px-5 h-10',
      square: 'aspect-square w-10 h-10',
      textSize: 'text-xl',
    },
    lg: {
      rectangle: 'px-7 h-12',
      square: 'aspect-square w-12 h-12',
      textSize: 'text-2xl',
    },
  };

  return (
    <>
      <button
        className={`grid cursor-pointer auto-cols-max grid-flow-col items-center justify-center gap-2 rounded-md ${sizes[size][shape]} ${sizes[size].textSize} ${variants[variant]} ${bordered && borderStyle[variant]} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {StartIcon}
        {label}
        {EndIcon}
      </button>
    </>
  );
}
