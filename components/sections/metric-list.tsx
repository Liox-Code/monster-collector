type Metric = {
  value: string;
  label: string;
};

type Props = {
  metrics: Metric[];
};

export default function MetricList({ metrics }: Props) {
  return (
    <div className="grid auto-cols-max grid-flow-col">
      {metrics.map((metric, index) => {
        const isLast = metrics.length - 1 === index;

        return (
          <div key={index} className="grid auto-cols-max grid-flow-col items-center">
            <div className="grid auto-cols-max grid-flow-col items-baseline-last gap-2">
              <span className="text-3xl font-semibold">{metric.value}</span>
              <span className="text-primary-200 text-xl">{metric.label}</span>
            </div>
            {!isLast && <span className="mx-16 size-3 rounded-full bg-neutral-700" />}
          </div>
        );
      })}
    </div>
  );
}
