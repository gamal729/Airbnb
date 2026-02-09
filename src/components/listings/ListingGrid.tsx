'use client';

import ListingCard from "./ListingCard";

// Mock data
const listings = [
    {
        id: '1',
        title: 'Modern Villa',
        description: 'Beautiful villa with pool',
        imageSrc: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
        category: 'Modern',
        roomCount: 4,
        bathroomCount: 3,
        guestCount: 8,
        locationValue: 'Bali',
        price: 250
    },
    {
        id: '2',
        title: 'Beach House',
        description: 'Right on the beach',
        imageSrc: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',
        category: 'Beach',
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: 'Malibu',
        price: 180
    },
    {
        id: '3',
        title: 'Countryside Cottage',
        description: 'Peaceful retreat',
        imageSrc: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop',
        category: 'Countryside',
        roomCount: 3,
        bathroomCount: 2,
        guestCount: 6,
        locationValue: 'Tuscany',
        price: 120
    },
    {
        id: '4',
        title: 'Mountain Cabin',
        description: 'Ski-in ski-out',
        imageSrc: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?q=80&w=2070&auto=format&fit=crop',
        category: 'Skiing',
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: 'Aspen',
        price: 300
    },
    {
        id: '5',
        title: 'Luxury Apartment',
        description: 'City center luxury',
        imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
        category: 'Lux',
        roomCount: 1,
        bathroomCount: 1,
        guestCount: 2,
        locationValue: 'New York',
        price: 400
    },
    {
        id: '6',
        title: 'Desert Oasis',
        description: 'Experience the desert',
        imageSrc: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1527&auto=format&fit=crop',
        category: 'Desert',
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: 'Dubai',
        price: 220
    }
];

export default function ListingGrid() {
    return (
        <>
            {listings.map((listing) => (
                <ListingCard
                    key={listing.id}
                    data={listing}
                />
            ))}
        </>
    );
}
