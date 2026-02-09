'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
    Briefcase,
    TreePine,
    Wind,
    MountainSnow,
    Tent,
    Palmtree,
    Sailboat,
    Castle,
    Snowflake,
    Coffee,
    Ghost,
    Warehouse,
    Gem,
    School,
    Plane
} from 'lucide-react';

import CategoryBox from './CategoryBox';
import Container from '../Container';

export const categories = [
    {
        label: 'Beach',
        icon: Palmtree,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: Wind,
        description: 'This property is has windmills!',
    },
    {
        label: 'Modern',
        icon: Warehouse,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: MountainSnow,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: Snowflake,
        description: 'This is property has a beautiful pool!'
    },
    {
        label: 'Islands',
        icon: Sailboat,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: Sailboat,
        description: 'This property is near a lake!'
    },
    {
        label: 'Skiing',
        icon: Snowflake,
        description: 'This property has skiing activies!'
    },
    {
        label: 'Castles',
        icon: Castle,
        description: 'This property is an ancient castle!'
    },
    {
        label: 'Caves',
        icon: Ghost,
        description: 'This property is in a spooky cave!'
    },
    {
        label: 'Camping',
        icon: Tent,
        description: 'This property offers camping activities!'
    },
    {
        label: 'Arctic',
        icon: Snowflake,
        description: 'This property is in arctic environment!'
    },
    {
        label: 'Desert',
        icon: Plane,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        icon: Warehouse,
        description: 'This property is in a barn!'
    },
    {
        label: 'Lux',
        icon: Gem,
        description: 'This property is brand new and luxurious!'
    }
];

export default function Categories() {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
}
