import { NAV_LINKS } from '@/constants/monster';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function AuthAppShell({ children }: Props) {
  return (
    <div className="grid min-h-screen max-w-screen grid-rows-[auto_1fr_auto] overflow-hidden">
      <div className="bg-background min-h-20 w-full px-20 py-4">
        <div className="flex h-full items-center justify-start gap-4">
          <Link
            href={NAV_LINKS[0].href}
            className="ring-primary-300/30 bg-surface size-10 rounded-md p-1 ring-1"
          >
            <Image src={'/logo_monster.png'} alt="logo" width={100} height={100} />
          </Link>
          <span className="font-mono uppercase">Monster Collector Hub</span>
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-20 px-20 py-20">{children}</div>
      <div className="min-h-20 w-full px-20 py-4">
        <div className="flex h-full items-center justify-start">
          <span className="font-mono uppercase">
            © 2025 MONSTER COLLECTOR HUB. TACTICAL ROSTER MATRIX.
          </span>
        </div>
      </div>
    </div>
  );
}
