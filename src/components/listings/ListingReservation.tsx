'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ListingReservationProps {
    price: number;
    totalPrice: number;
    onChangeDate: (value: any) => void;
    dateRange: any;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
    price,
    totalPrice,
    onChangeDate,
    dateRange,
    onSubmit,
    disabled,
    disabledDates
}) => {
    return (
        <div
            className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
        p-6
        sticky
        top-28
        shadow-xl
      "
        >
            <div className="flex flex-row items-center gap-1 mb-4">
                <div className="text-2xl font-semibold">
                    $ {price}
                </div>
                <div className="font-light text-neutral-600">
                    مقابل 2 ليال
                </div>
            </div>
            <hr />

            <div className="flex flex-col border border-neutral-400 rounded-lg overflow-hidden mt-4">
                <div className="flex border-b border-neutral-400">
                    <div className="flex-1 p-3 border-l border-neutral-400">
                        <div className="text-[10px] font-bold uppercase">تسجيل الوصول</div>
                        <div className="text-sm">2026/7/23</div>
                    </div>
                    <div className="flex-1 p-3">
                        <div className="text-[10px] font-bold uppercase">تسجيل المغادرة</div>
                        <div className="text-sm">2026/7/25</div>
                    </div>
                </div>
                <div className="p-3 flex justify-between items-center cursor-pointer hover:bg-neutral-100">
                    <div>
                        <div className="text-[10px] font-bold uppercase">الضيف</div>
                        <div className="text-sm">1 ضيف</div>
                    </div>
                    <ChevronDown size={16} />
                </div>
            </div>

            <button className='w-full bg-primary text-primary-foreground font-bold text-lg py-3 rounded-lg mt-4 hover:brightness-90 transition'>
                حجز
            </button>

            <div className="text-center text-neutral-500 text-sm mt-2 mb-4">
                لن يخصم رسوم الحجز في هذه المرحلة
            </div>

            <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                <div className="underline">إلغاء مجاني قبل 22 يوليو</div>
            </div>

            <div className="flex justify-between items-center py-2 text-neutral-500 pt-4">
                <div className="flex items-center gap-1">
                    الإبلاغ عن هذا الإعلان
                </div>
            </div>

        </div>
    );
}

export default ListingReservation;
