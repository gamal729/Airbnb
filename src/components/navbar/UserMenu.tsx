'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Globe } from "lucide-react";
import Avatar from "./Avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
                >
                    انضم كضيف
                </div>
                <div
                    className="
                    hidden 
                    md:block 
                    p-3 
                    rounded-full 
                    hover:bg-neutral-100 
                    transition 
                    cursor-pointer
                  "
                >
                    <Globe size={18} />
                </div>

                <DropdownMenu dir="rtl">
                    <DropdownMenuTrigger asChild>
                        <div
                            className="
                p-4
                md:py-1
                md:px-2
                border-[1px] 
                border-neutral-200 
                flex 
                flex-row 
                items-center 
                gap-3 
                rounded-full 
                cursor-pointer 
                hover:shadow-md 
                transition
              "
                        >
                            <AiOutlineMenu size={18} />
                            <div className="hidden md:block">
                                <Avatar />
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[40vw] md:w-[240px] rounded-xl bg-white text-right shadow-md border-neutral-200">
                        <DropdownMenuItem className="cursor-pointer font-bold justify-end hover:bg-neutral-100 py-3">
                            تسجيل الدخول
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer justify-end hover:bg-neutral-100 py-3">
                            إنشاء حساب
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-neutral-200" />
                        <DropdownMenuItem className="cursor-pointer justify-end hover:bg-neutral-100 py-3">
                            انضم كمضيف
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer justify-end hover:bg-neutral-100 py-3">
                            مركز المساعدة
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default UserMenu;
