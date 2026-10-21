import Link from 'next/link';

type Prop = {
  message: string;
  linkLabel: string;
  href: string;
};

export default function AuthFormFooter({ message, linkLabel, href }: Prop) {
  return (
    <div className="flex gap-2">
      <span className="text-primary-200">{message}</span>
      <Link href={href} className="text-primary-400 font-bold">
        {linkLabel}
      </Link>
    </div>
  );
}
