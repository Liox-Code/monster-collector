import { ArrowRight } from 'lucide-react';
import Button from '../ui/button';
import MetricList from './metric-list';

export default function HeroSection() {
  const metrics = [
    { value: '850+', label: 'Total Monster' },
    { value: '1,240', label: 'Total Teams' },
    { value: '3,800+', label: 'Active Users' },
  ];

  return (
    <div className="grid grid-flow-row auto-rows-max gap-10">
      <div className="grid gap-3">
        <h2 className="text-4xl font-semibold">Collect & Assemble Battle Teams</h2>
        <p className="text-primary-200 text-2xl">
          Discover, analyze, and build competitive monster rosters with real-time stats and
          community synergies.
        </p>
      </div>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        <Button label="Explore Monsters" endIcon={<ArrowRight className="size-5" />} size="md" />
        <Button label="Build a Team" variant="secondary" size="md" />
      </div>
      <MetricList metrics={metrics} />
    </div>
  );
}
