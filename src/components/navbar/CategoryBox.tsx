'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`
        relative
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
        >
            <Icon size={26} />
            <div className="font-medium text-xs">
                {label}
            </div>
            {selected && (
                <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 w-full h-[2px] bg-neutral-800"
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </div>
    );
}

export default CategoryBox;
