import ClientOnly from "@/components/ClientOnly";
import ListingClient from "@/components/listings/ListingClient";

// Mock data fetching
const getListingById = async (params: any) => {
    // Return mock data that matches the screenshots
    return {
        id: params.listingId,
        title: "زاوية صغيرة هادئة في قلب باريس",
        description: "شقة قديمة مشرقة وواسعة. غرفة معيشة كبيرة تفصل غرفة الضيف عن الجزء الخاص الذي يسكنه المضيف.",
        imageSrc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
        createdAt: new Date().toISOString(),
        category: 'Modern',
        roomCount: 1,
        bathroomCount: 1,
        guestCount: 2,
        locationValue: 'Paris, France',
        userId: 'user-mock',
        price: 204,
        user: {
            id: 'host-1',
            name: 'Carole',
            image: '/images/placeholder.jpg',
            email: 'host@example.com'
        }
    };
};

interface IParams {
    listingId?: string;
}

const ListingPage = async (props: { params: Promise<IParams> }) => {
    const params = await props.params;
    const listing = await getListingById(params);
    const currentUser = null; // Mock no logged in user

    if (!listing) {
        return (
            <ClientOnly>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold">Listing not found</h1>
                </div>
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <ListingClient
                listing={listing}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
}

export default ListingPage;
