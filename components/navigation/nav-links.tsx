'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export default function NavLinks({ navLinks }: Props) {
  const pathName = usePathname();

  return (
    <ul className="grid auto-cols-max grid-flow-col gap-1.5">
      {navLinks.map((navLink, index) => {
        const isActive = pathName === navLink.href;

        return (
          <li
            key={index}
            className={`rounded-md px-2 py-1 ${isActive ? 'ring-primary-300/30 bg-neutral-800 ring-1' : ''}`}
          >
            <Link href={navLink.href}>{navLink.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
