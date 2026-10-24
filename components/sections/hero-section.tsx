type HeroSectionProps = { title: string; description: string };

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <div className="grid gap-3">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-primary-200 text-2xl">{description}</p>
    </div>
  );
}
