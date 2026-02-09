import ClientOnly from "@/components/ClientOnly";
import LocationClient from "@/components/locations/LocationClient";

interface IParams {
    city?: string;
}

const LocationPage = async (props: { params: Promise<IParams> }) => {
    const params = await props.params;
    const { city } = params;

    if (!city) {
        return null;
    }

    return (
        <ClientOnly>
            <LocationClient city={city} />
        </ClientOnly>
    );
}

export default LocationPage;
