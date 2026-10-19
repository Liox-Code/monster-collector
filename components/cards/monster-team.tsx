import { NullableMonsterTeam } from '@/types/monster';
import CompactMonsterCard from './compact-monster-card';
import MonsterBadge from './monster-badge';
import { CheckCircle, Circle, Copy } from 'lucide-react';
import { MONSTER_TEAM_MAX_SIZE } from '@/constants/monster-ui';
import LikeBadge from '../ui/like-badge';
import Button from '../ui/button';

type Props = {
  monsterTeam: NullableMonsterTeam;
};

export default function MonsterTeam({ monsterTeam }: Props) {
  const teamSize = monsterTeam.monsters?.length;
  const isLikedByUser = false;

  const handleToggleLike = async () => {};

  return (
    <div className="bg-surface-1 border-primary-300/20 flex w-full max-w-4xl flex-col items-start gap-6 rounded-3xl border-2 p-10">
      <div className="inline-flex w-full items-center justify-between">
        <MonsterBadge
          label={monsterTeam.state}
          variant={monsterTeam.state}
          startIcon={Circle}
          iconClassName="size-3"
        />
        <LikeBadge
          teamId={monsterTeam.teamId}
          initialLikesCount={monsterTeam.likes ?? 0}
          initialIsLike={isLikedByUser}
          onLikeToggle={handleToggleLike}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl">{monsterTeam.title}</h5>
        <p className="text-primary-200 text-xl">{monsterTeam.description}</p>
      </div>
      <div className="flex w-full justify-between gap-2">
        {monsterTeam.monsters?.map((monster) => {
          return <CompactMonsterCard key={monster.id} monsterCard={monster} />;
        })}
      </div>
      <hr className="text-primary-200/20 w-full" />
      <div className="flex w-full items-center justify-between">
        <span className="text-primary-200 flex items-center gap-2">
          <CheckCircle className="text-primary-500 size-5" />
          {MONSTER_TEAM_MAX_SIZE}
          <span>/</span>
          <span>{teamSize}</span>
          <span>Monsters</span>
        </span>
        <div>
          <Button shape="square" variant="secondary" startIcon={<Copy />} />
        </div>
      </div>
    </div>
  );
}
