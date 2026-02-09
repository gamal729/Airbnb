'use client';

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface SearchDateProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
}

const SearchDate: React.FC<SearchDateProps> = ({
    value,
    onChange
}) => {
    return (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-3xl shadow-2xl p-4 overflow-hidden z-50">
            <DateRange
                rangeColors={['#262626']}
                ranges={[value]}
                date={new Date()}
                onChange={onChange}
                direction="vertical"
                showDateDisplay={false}
                minDate={new Date()}
            />
        </div>
    );
}

export default SearchDate;
