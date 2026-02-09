'use client';

const LocationAttractions = () => {
    const attractions = [
        { name: "شارع النهر", description: "397 شخصًا محليًا يوصي بهذا" },
        { name: "حديقة فورسايث", description: "333 شخصًا محليًا يوصي بهذا" },
        { name: "منطقة سافانا التاريخية", description: "42 شخصًا محليًا يوصي بهذا" },
        { name: "مطار سافانا/هيلتون هيد الدولي", description: "36 شخصًا محليًا يوصي بهذا" },
        { name: "The Olde Pink House", description: "409 أشخاص محليين يوصون بهذا" },
        { name: "مقبرة بونافنتور", description: "270 شخصًا محليًا يوصي بهذا" },
    ];

    return (
        <div className="py-12 border-b border-neutral-200">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800 text-center">الإقامة بالقرب من أفضل المعالم السياحية في سافانا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attractions.map((item, index) => (
                    <div key={index} className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer bg-white">
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-neutral-500 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocationAttractions;
