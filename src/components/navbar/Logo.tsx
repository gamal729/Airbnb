import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push('/')}
            className="hidden md:block cursor-pointer"
        >
            <Image
                src="/images/logo.png"
                alt="Blukh"
                height="100"
                width="100"
                className="w-auto h-[50px]"
                priority
            />
        </div>
    );
}

export default Logo;
