'use client';

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import SearchLocation from "./SearchLocation";
import SearchDate from "./SearchDate";

interface SearchProps {
    compact?: boolean;
}

const Search: React.FC<SearchProps> = ({ compact }) => {
    const [activeTab, setActiveTab] = useState<'location' | 'date' | 'guests' | null>(null);
    const [location, setLocation] = useState('');
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const handleSelectLocation = (value: string) => {
        setLocation(value);
        setActiveTab('date'); // Move to date selection automatically
    };

    const handleSelectDate = (value: RangeKeyDict) => {
        setDateRange(value.selection);
    };

    if (compact) {
        return (
            <div
                className="
          border-[1px] 
          w-full 
          md:w-auto 
          py-2 
          rounded-full 
          shadow-sm 
          hover:shadow-md 
          transition 
          cursor-pointer
          bg-white
        "
            >
                <div
                    className="
            flex 
            flex-row 
            items-center 
            justify-between
          "
                >
                    <div
                        className="
              text-sm 
              font-semibold 
              px-6
            "
                    >
                        {location || "أي مكان"}
                    </div>
                    <div
                        className="
              hidden 
              sm:block 
              text-sm 
              font-semibold 
              px-6 
              border-x-[1px] 
              flex-1 
              text-center
            "
                    >
                        أي أسبوع
                    </div>
                    <div
                        className="
              text-sm 
              pl-6 
              pr-2 
              text-gray-600 
              flex 
              flex-row 
              items-center 
              gap-3
            "
                    >
                        <div className="hidden sm:block">إضافة ضيوف</div>
                        <div
                            className="
                p-2 
                bg-primary 
                rounded-full 
                text-white
              "
                        >
                            <SearchIcon size={16} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="
        border-[1px] 
        w-full 
        max-w-[850px] 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
        bg-white
        relative
      "
        >
            <div
                className="
          flex 
          flex-row 
          items-center 
          justify-between
          pr-6
          pl-2
        "
            >
                {/* Location */}
                <div
                    onClick={() => setActiveTab(activeTab === 'location' ? null : 'location')}
                    className={`
            text-sm 
            font-semibold 
            px-6
            flex-1
            flex
            flex-col
            items-start
            border-l-[1px]
            border-gray-200
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            relative
            ${activeTab === 'location' ? 'bg-neutral-100 shadow-sm' : ''}
          `}
                >
                    <div className="font-bold text-neutral-800">المكان</div>
                    <div className="font-light text-neutral-500 text-xs truncate w-full pt-1">
                        {location || "بحث حسب المدينة او موقع شهير"}
                    </div>
                    {activeTab === 'location' && (
                        <div onClick={(e) => e.stopPropagation()}>
                            <SearchLocation value={location} onChange={handleSelectLocation} />
                        </div>
                    )}
                </div>

                {/* Date */}
                <div
                    onClick={() => setActiveTab(activeTab === 'date' ? null : 'date')}
                    className={`
            hidden 
            sm:flex 
            flex-col
            items-start
            text-sm 
            font-semibold 
            px-6 
            border-l-[1px] 
            border-gray-200
            flex-1 
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            relative
            ${activeTab === 'date' ? 'bg-neutral-100 shadow-sm' : ''}
          `}
                >
                    <div className="font-bold text-neutral-800">التاريخ</div>
                    <div className="font-light text-neutral-500 text-xs pt-1">
                        {dateRange.startDate ? dateRange.startDate.toLocaleDateString() : "إضافة التواريخ"}
                    </div>
                    {activeTab === 'date' && (
                        <div onClick={(e) => e.stopPropagation()}>
                            <SearchDate value={dateRange} onChange={handleSelectDate} />
                        </div>
                    )}
                </div>

                {/* Guests */}
                <div
                    onClick={() => setActiveTab(activeTab === 'guests' ? null : 'guests')}
                    className={`
            text-sm 
            px-6 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            flex-1
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
             ${activeTab === 'guests' ? 'bg-neutral-100 shadow-sm' : ''}
          `}
                >
                    <div className="flex flex-col items-start">
                        <div className="font-bold text-neutral-800">من</div>
                        <div className="font-light text-neutral-500 text-xs pt-1">إضافة الضيوف</div>
                    </div>
                    <div
                        className="
              p-3
              bg-primary 
              rounded-full 
              text-white
              hover:brightness-90
              transition
            "
                    >
                        <SearchIcon size={18} />
                    </div>
                </div>
            </div>

            {/* Backdrop to close menus */}
            {activeTab && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setActiveTab(null)}
                />
            )}
        </div>
    );
}

export default Search;
