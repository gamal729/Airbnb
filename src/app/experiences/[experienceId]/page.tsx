
import ClientOnly from "@/components/ClientOnly";
import ExperienceClient from "@/components/experiences/ExperienceClient";

interface IParams {
    experienceId?: string;
}

const ExperiencePage = async (props: { params: Promise<IParams> }) => {
    const params = await props.params;
    return (
        <ClientOnly>
            <ExperienceClient experienceId={params.experienceId!} />
        </ClientOnly>
    );
}

export default ExperiencePage;
