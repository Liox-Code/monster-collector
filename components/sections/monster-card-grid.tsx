import { NullableMonsterCard } from '@/types/monster';
import MonsterCard from '../cards/monster-card';

type MonsterCardGridProps = {
  monsterCards: NullableMonsterCard[];
};

export default function MonsterCardGrid({ monsterCards }: MonsterCardGridProps) {
  return (
    <div className="grid w-full grid-cols-4 gap-6">
      {monsterCards.map((monsterCard) => {
        return <MonsterCard key={monsterCard.id} monsterCard={monsterCard} />;
      })}
    </div>
  );
}
