import Image from 'next/image';

type Prop = {
  title: string;
  description: string;
};

export default function AuthFormHeader({ title, description }: Prop) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 rounded-xl bg-neutral-800 p-3">
          <Image src={'/logo_monster.png'} alt="logo" width={100} height={100} />
        </div>
        <h2 className="text-primary-200 font-mono uppercase">Monster Collector Hub</h2>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="text-primary-200">{description}</span>
      </div>
    </div>
  );
}
