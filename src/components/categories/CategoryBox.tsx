'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import queryString from 'query-string';

interface CategoryBoxProps {
    icon: LucideIcon;
    label: string;
    selected?: boolean;
}

export default function CategoryBox({
    icon: Icon,
    label,
    selected,
}: CategoryBoxProps) {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = queryString.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label,
        };

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={cn(
                'flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer',
                selected ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'
            )}
        >
            <Icon size={26} strokeWidth={1.5} />
            <div className="font-medium text-xs">
                {label}
            </div>
        </div>
    );
}
