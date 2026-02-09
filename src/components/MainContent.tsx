'use client';

import { useSearchParams } from "next/navigation";
import Container from "@/components/Container";
import ListingSection from "@/components/listings/ListingSection";
import FloatingMapToggle from "@/components/FloatingMapToggle";
import ExperienceSection from "@/components/listings/ExperienceSection";
import ServiceSection from "@/components/listings/ServiceSection";
import { experiences } from "@/data/mockExperiences";
import { services } from "@/data/mockServices";


// Initial mock data for Homes (moved from page.tsx to keep it self-contained or passed as prop)
// We can duplicate the generateListings helper here or move it to a util.
// For simplicity, I'll copy the helper here since we are moving logic.

const generateListings = (sectionTitle: string) => {
    return Array.from({ length: 8 }).map((_, i) => ({
        id: `${sectionTitle}-${i}`,
        title: `Listing ${i + 1} in ${sectionTitle}`,
        description: 'Beautiful home with great amenities',
        imageSrc: `https://images.unsplash.com/photo-${[
            '1613490493576-7fde63acd811',
            '1542718610-a1d656d1884c',
            '1499793983690-e29da59ef1c2',
            '1505881402582-c5bc11054f91',
            '1502672260266-1c1ef2d93688',
            '1566073771259-6a8506099945',
            '1512918760513-0fedc4bda131',
            '1600585154340-be6161a56a0c'
        ][i % 8]}?q=80&w=600&auto=format&fit=crop`,
        createdAt: new Date().toISOString(),
        category: 'Category',
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: sectionTitle.split(' ').pop() || 'Location',
        userId: 'user-mock',
        price: 100 + (i * 25),
        region: 'Region'
    }));
};

const homeSections = [
    { title: "بيوت رائجة في باريس", listings: generateListings("Paris") },
    { title: "بيوت متاحة في الشهر القادم في لندن", listings: generateListings("London") },
    { title: "إقامة في الرياض", listings: generateListings("Riyadh") },
    { title: "بيوت متاحة في الشهر القادم في دبي", listings: generateListings("Dubai") },
    { title: "البيوت في روما", listings: generateListings("Rome") },
    { title: "بيوت متاحة في الشهر القادم في مدريد", listings: generateListings("Madrid") },
    { title: "أماكن الإقامة في ميلان", listings: generateListings("Milan") },
    { title: "استكشف البيوت في برشلونة", listings: generateListings("Barcelona") },
    { title: "بيوت رائجة في كيب تاون", listings: generateListings("Cape Town") },
    { title: "إقامة في بودابست", listings: generateListings("Budapest") },
];

const MainContent = () => {
    const params = useSearchParams();
    const tab = params?.get("tab");
    const isExperiencesTab = tab === 'experiences';
    const isServicesTab = tab === 'services';

    return (
        <Container>
            <div className="pt-24 pb-20 flex flex-col gap-8" dir="rtl">
                {isExperiencesTab ? (
                    experiences.map((section) => (
                        <ExperienceSection
                            key={section.title}
                            title={section.title}
                            description={section.description}
                            items={section.items}
                        />
                    ))
                ) : isServicesTab ? (
                    services.map((section) => (
                        <ServiceSection
                            key={section.title}
                            title={section.title}
                            items={section.items}
                            aspectRatio={section.aspectRatio as "square" | "landscape"}
                        />
                    ))
                ) : (
                    homeSections.map((section) => (
                        <ListingSection
                            key={section.title}
                            title={section.title}
                            listings={section.listings}
                        />
                    ))
                )}
            </div>
            {!isExperiencesTab && !isServicesTab && <FloatingMapToggle />}
        </Container>
    );
};

export default MainContent;
