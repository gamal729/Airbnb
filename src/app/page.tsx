import ClientOnly from "@/components/ClientOnly";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <ClientOnly>
      <MainContent />
    </ClientOnly>
  );
}
