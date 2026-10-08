import { Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-primary-100 grid h-full w-full grid-flow-col items-center justify-between">
      <div className="grid w-full grid-flow-col items-center gap-2">
        <Database className="text-primary-500 size-4" />
        <span>MONSTER COLLECTOR HUB ENGINE v2.4</span>
      </div>
      <span>© 2025 Monster Collector Hub. Tactical Battle Systems.</span>
    </footer>
  );
}
