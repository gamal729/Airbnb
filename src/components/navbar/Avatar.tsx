'use client';

import { Avatar as ShadcnAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
    src?: string | null | undefined;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, className }) => {
    return (
        <ShadcnAvatar className={cn("h-[30px] w-[30px]", className)}>
            <AvatarImage src={src || undefined} alt="Avatar" />
            <AvatarFallback>
                <UserCircle2 className="text-zinc-500 w-full h-full p-1" />
            </AvatarFallback>
        </ShadcnAvatar>
    );
}

export default Avatar;
