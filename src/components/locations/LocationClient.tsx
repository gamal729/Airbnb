'use client';

import Container from "@/components/Container";
import { decode } from "querystring";
import LocationHero from "./LocationHero";
import LocationListings from "./LocationListings";
import LocationStats from "./LocationStats";
import LocationAmenities from "./LocationAmenities";
import LocationAttractions from "./LocationAttractions";
import LocationWeather from "./LocationWeather";
import MoreFromAirbnb from "./MoreFromAirbnb";

interface LocationClientProps {
    city: string;
}

const LocationClient: React.FC<LocationClientProps> = ({ city }) => {
    const decodedCity = decodeURI(city);

    // Mock listings data
    const topRatedListings = [
        {
            id: "1",
            title: "شقة في المنطقة التاريخية الجنوبية",
            description: "شقة في وسط المدينة - إطلالات على الكاتدرائية...",
            imageSrc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580&auto=format&fit=crop",
            category: "Apartment",
            roomCount: 2,
            bathroomCount: 1,
            guestCount: 4,
            locationValue: decodedCity,
            price: 145,
            rating: 4.98
        },
        {
            id: "2",
            title: "شقة في سافانا",
            description: "ليمون لوفت - ملاذ أنيق بطوابق نوم في وسط...",
            imageSrc: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
            category: "Loft",
            roomCount: 1,
            bathroomCount: 1,
            guestCount: 2,
            locationValue: decodedCity,
            price: 121,
            rating: 4.96
        },
        {
            id: "3",
            title: "غرفة خاصة في منطقة شرق فيكتوري",
            description: "غرفة مع مكتب مجانًا بواسطة خدمة IDOT بواسط...",
            imageSrc: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop",
            category: "Room",
            roomCount: 1,
            bathroomCount: 1,
            guestCount: 2,
            locationValue: decodedCity,
            price: 54,
            rating: 4.93
        },
        {
            id: "4",
            title: "بيت في المنطقة التاريخية الجنوبية",
            description: "بيت عربة وسط المدينة قريب للجوار مع فناء...",
            imageSrc: "https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2671&auto=format&fit=crop",
            category: "House",
            roomCount: 2,
            bathroomCount: 1,
            guestCount: 4,
            locationValue: decodedCity,
            price: 168,
            rating: 4.95
        },
    ];

    const popularListings = [
        {
            id: "5",
            title: "شقة في نورث هيستوريك ديستريكت",
            description: "شقة علوية أنيقة في وسط مدينة باي سانت مع م...",
            imageSrc: "https://images.unsplash.com/photo-1502005229766-3c8ef56462b1?q=80&w=2670&auto=format&fit=crop",
            category: "Apartment",
            roomCount: 2,
            bathroomCount: 1,
            guestCount: 4,
            locationValue: decodedCity,
            price: 118,
            rating: 4.96
        },
        {
            id: "6",
            title: "جناح ضيوف في سافانا",
            description: "بيت ضيوف لطيف في منطقة ستارلاند!",
            imageSrc: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2670&auto=format&fit=crop",
            category: "Guest Suite",
            roomCount: 1,
            bathroomCount: 1,
            guestCount: 2,
            locationValue: decodedCity,
            price: 85,
            rating: 4.92
        },
        {
            id: "7",
            title: "غرفة خاصة في المنطقة التاريخية...",
            description: "تجربة سفر أصيلة في Savannah في حديقة هيدواي",
            imageSrc: "https://images.unsplash.com/photo-1512918760532-3edbed718d80?q=80&w=2670&auto=format&fit=crop",
            category: "Room",
            roomCount: 1,
            bathroomCount: 1,
            guestCount: 2,
            locationValue: decodedCity,
            price: 70,
            rating: 4.89
        },
        {
            id: "8",
            title: "شقة في المنطقة التاريخية الجنوبية...",
            description: "شقة في وسط المدينة على الحائط في أي من...",
            imageSrc: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop",
            category: "Apartment",
            roomCount: 2,
            bathroomCount: 1,
            guestCount: 3,
            locationValue: decodedCity,
            price: 110,
            rating: 4.91
        },
    ];


    return (
        <Container>
            <div className="pt-24 pb-16 flex flex-col gap-10" dir="rtl">
                <LocationHero city={city} />
                <LocationListings
                    title={`إيجارات العطلات الأعلى تصنيفًا في ${decodedCity}`}
                    subtitle="معلومات أكدها الضيوف: حصلت هذه الإقامات على تقييمات عالية من حيث الموقع والنظافة وغيرها."
                    listings={topRatedListings}
                />
                <LocationAmenities />
                <LocationAttractions />
                <LocationListings
                    title={`أماكن تأجير عطلات رائعة أخرى في ${decodedCity}`}
                    listings={popularListings}
                />
                <LocationWeather />
                <LocationStats />
                <MoreFromAirbnb />
            </div>
        </Container>
    );
}

export default LocationClient;
