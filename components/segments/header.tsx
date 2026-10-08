import { UserRound, Search } from 'lucide-react';
import Image from 'next/image';
import NavLinks from '../nav-links';
import Link from 'next/link';

export default function Header() {
  const TITLE = 'Monster Collector Hub';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Monster', href: '/monster' },
    { label: 'Teams', href: '/teams' },
    { label: 'Ranking', href: '/ranking' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <div className="grid h-full w-full auto-cols-max grid-flow-col items-center justify-between gap-4">
      <div className="grid h-full auto-cols-max grid-flow-col items-center gap-4">
        <Link
          href={navLinks[0].href}
          className="ring-primary-300/30 bg-surface size-10 rounded-md ring-1"
        >
          <Image src={'/logo_monster.png'} alt="logo" width={100} height={100} />
        </Link>

        <Link href={navLinks[0].href}>
          <span className="font-sans text-xl font-bold">{TITLE}</span>
        </Link>
        <NavLinks navLinks={navLinks} />
      </div>
      <div className="grid h-full auto-cols-max grid-flow-col items-center gap-4">
        <div className="bg-surface-1 grid h-full grid-flow-col items-center gap-2 rounded-md px-2 ring-1 ring-neutral-300/30">
          <Search />
          <input
            className="placeholder:text-neutral-50/50"
            type="search"
            placeholder="Search monster"
          />
        </div>
        <div className="bg-primary-500 flex aspect-square h-full items-center justify-center rounded-full">
          <UserRound />
        </div>
      </div>
    </div>
  );
}
