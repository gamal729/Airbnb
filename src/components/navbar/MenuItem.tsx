'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
    bold?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, bold }) => {
    return (
        <div
            onClick={onClick}
            className={`
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        cursor-pointer
        ${bold ? 'font-semibold' : 'font-medium'}
      `}
        >
            {label}
        </div>
    );
}

export default MenuItem;
