'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

type Props = {
  teamId: string;
  initialIsLike?: boolean;
  initialLikesCount: number;
  onLikeToggle?: (teamId: string, nextIsLikeState: boolean) => Promise<void>;
};

export default function LikeBadge({
  teamId,
  initialIsLike = false,
  initialLikesCount,
  onLikeToggle,
}: Props) {
  const [isLiked, setIsLiked] = useState(initialIsLike);
  const [likesCount, setLikesCount] = useState(initialLikesCount);

  const handleToggleLike = async () => {
    const prevIsLike = isLiked;
    const prevLikesCount = likesCount;

    const nextIsLike = !isLiked;
    setIsLiked(nextIsLike);
    setLikesCount((prevLikesCount) => (nextIsLike ? prevLikesCount + 1 : prevLikesCount - 1));

    try {
      if (onLikeToggle) {
        await onLikeToggle(teamId, nextIsLike);
      }
    } catch (error) {
      setIsLiked(prevIsLike);
      setLikesCount(prevLikesCount);
      throw new Error(`not-only-of-type:Like toggle error: ${error}`);
    }
  };

  return (
    <div className="ring-primary-300/20 flex min-w-20 items-center justify-between rounded px-2 py-1 ring-1 ring-inset">
      <button onClick={handleToggleLike} className="aspect-square h-5 cursor-pointer">
        <Heart className={`stroke-tertiary-400 h-full w-full ${isLiked && 'fill-tertiary-400'}`} />
      </button>
      <span>{likesCount}</span>
    </div>
  );
}
