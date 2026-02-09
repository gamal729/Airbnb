'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface HeartButtonProps {
    listingId: string;
    currentUser?: any | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {
    const [hasFavorited, setHasFavorited] = useState(false);

    const toggleFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setHasFavorited(!hasFavorited);
    }

    return (
        <div
            onClick={toggleFavorite}
            className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
        >
            <AiOutlineHeart
                size={28}
                className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
            />
            <AiFillHeart
                size={24}
                className={
                    hasFavorited ? 'fill-primary' : 'fill-neutral-500/70'
                }
            />
        </div>
    );
}

export default HeartButton;
