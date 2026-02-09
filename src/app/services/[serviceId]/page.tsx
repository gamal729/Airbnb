import ClientOnly from "@/components/ClientOnly";
import ServiceClient from "@/components/services/ServiceClient";

interface IParams {
    serviceId?: string;
}

const ServicePage = async ({ params }: { params: Promise<IParams> }) => {
    const resolvedParams = await params;
    return (
        <ClientOnly>
            <ServiceClient serviceId={resolvedParams.serviceId || ""} />
        </ClientOnly>
    );
}

export default ServicePage;
