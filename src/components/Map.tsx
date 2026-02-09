'use client';

import { MapPin } from "lucide-react";

interface MapProps {
    center?: number[]
}

const Map: React.FC<MapProps> = ({ center }) => {
    return (
        <div className="w-full h-[35vh] rounded-lg bg-neutral-100 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
            <div className="z-10 bg-white/80 p-4 rounded-xl shadow-lg flex flex-col items-center">
                <MapPin size={32} className="text-primary mb-2" />
                <span className="font-semibold text-neutral-800">Map view is currently unavailable</span>
                <span className="text-xs text-neutral-500">Google Maps API key required</span>
            </div>
        </div>
    );
}

export default Map;
