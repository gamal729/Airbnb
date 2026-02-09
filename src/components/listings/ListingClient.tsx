'use client';

import { useMemo, useState } from "react";
import { categories } from "@/components/navbar/Categories";
import Container from "@/components/Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";
import ListingReservation from "./ListingReservation";
import ListingReviews from "./ListingReviews";
import ListingHostProfile from "./ListingHostProfile";

// Mock categories if not found
const mockCategories = [
    { label: 'Beach', icon: null, description: 'This property is close to the beach!' },
    { label: 'Modern', icon: null, description: 'This property is modern!' },
    { label: 'Countryside', icon: null, description: 'This property is in the countryside!' },
    { label: 'Pools', icon: null, description: 'This property has a pool!' },
    { label: 'Islands', icon: null, description: 'This property is on an island!' },
    { label: 'Lake', icon: null, description: 'This property is close to a lake!' },
    { label: 'Skiing', icon: null, description: 'This property has skiing activities!' },
    { label: 'Castles', icon: null, description: 'This property is in a castle!' },
    { label: 'Camping', icon: null, description: 'This property has camping activities!' },
    { label: 'Arctic', icon: null, description: 'This property is in the arctic environment!' },
    { label: 'Cave', icon: null, description: 'This property is in a cave!' },
    { label: 'Desert', icon: null, description: 'This property is in the desert!' },
    { label: 'Barns', icon: null, description: 'This property is in the barn!' },
    { label: 'Lux', icon: null, description: 'This property is luxurious!' },
];

interface ListingClientProps {
    reservation?: any;
    listing: any; // Using any for mock data flexibility
    currentUser?: any | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    reservation = null,
    currentUser = null,
}) => {

    const category = useMemo(() => {
        // Try to match with existing categories, or use mock
        return categories?.find((items) =>
            items.label === listing.category) || mockCategories[0];
    }, [listing.category]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const onCreateReservation = () => {
        // Create reservation logic (mock)
        console.log('Reservation created');
    }

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto" dir="rtl">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                    <div className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
                    >
                        <ListingInfo
                            user={listing.user}
                            category={category as any}
                            description={listing.description}
                            roomCount={listing.roomCount}
                            guestCount={listing.guestCount}
                            bathroomCount={listing.bathroomCount}
                            locationValue={listing.locationValue}
                        />
                        <div
                            className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
                        >
                            <ListingReservation
                                price={listing.price}
                                totalPrice={totalPrice}
                                onChangeDate={(value) => setDateRange(value)}
                                dateRange={dateRange}
                                onSubmit={onCreateReservation}
                                disabled={isLoading}
                                disabledDates={[]}
                            />
                        </div>
                    </div>
                    <hr />
                    <ListingReviews />
                    <hr />
                    <ListingHostProfile />
                </div>
            </div>
        </Container>
    );
}

export default ListingClient;
