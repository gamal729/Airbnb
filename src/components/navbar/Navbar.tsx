'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import MiddleNav from "./MiddleNav"; // Import MiddleNav
import { useScroll } from "@/hooks/useScroll";

const Navbar = () => {
    const scrolled = useScroll();

    return (
        <div className={`fixed w-full bg-white z-10 transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`} dir="rtl">
            <div
                className="
          py-4 
          border-b-[1px]
        "
            >
                <Container>
                    <div className="flex flex-col gap-4">
                        <div
                            className="
                flex 
                flex-row 
                items-center 
                justify-between
                gap-3
                md:gap-0
              "
                        >
                            <Logo />
                            {scrolled ? <Search compact={true} /> : <MiddleNav />}
                            <UserMenu />
                        </div>
                        {!scrolled && (
                            <div className="flex flex-row items-center justify-center pb-4 transition-all duration-300 origin-top">
                                <Search />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
