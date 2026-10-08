import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

export default function AppShell({ children }: Props) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <div className="bg-background min-h-20 w-full px-20 py-4 ring-1 ring-neutral-50/10">
        <Header />
      </div>
      <div className="px-20">{children}</div>
      <div className="bg-footer min-h-20 w-full px-20 py-4 ring-1 ring-neutral-50/10">
        <Footer />
      </div>
    </div>
  );
}
