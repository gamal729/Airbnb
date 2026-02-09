'use client';

const LocationWeather = () => {
    const months = [
        { name: "ينا", price: "$133", temp: "10°م" },
        { name: "فبر", price: "$145", temp: "12°م" },
        { name: "مار", price: "$182", temp: "16°م" },
        { name: "أبر", price: "$171", temp: "19°م" },
        { name: "ماي", price: "$160", temp: "23°م" },
        { name: "يون", price: "$149", temp: "27°م" },
        { name: "يول", price: "$151", temp: "28°م" },
        { name: "أغس", price: "$138", temp: "28°م" },
        { name: "سبت", price: "$138", temp: "25°م" },
        { name: "أكت", price: "$151", temp: "20°م" },
        { name: "نوف", price: "$135", temp: "15°م" },
        { name: "ديس", price: "$154", temp: "12°م" },
    ];

    return (
        <div className="py-12 border-b border-neutral-200 text-center">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800">ما هو أفضل وقت لزيارة سافانا؟</h2>

            <div className="overflow-x-auto no-scrollbar">
                <div className="min-w-[800px]">
                    <div className="grid grid-cols-13 border border-neutral-200 rounded-lg overflow-hidden text-sm">
                        {/* Header Column */}
                        <div className="bg-neutral-50 p-4 font-semibold border-l border-neutral-200 flex flex-col justify-center gap-6">
                            <div>الشهر</div>
                            <div>متوسط الأسعار</div>
                            <div>متوسط درجة الحرارة</div>
                        </div>

                        {/* Data Columns */}
                        {months.map((month, index) => (
                            <div key={index} className="p-4 flex flex-col justify-center items-center gap-6 border-l border-neutral-200 last:border-l-0">
                                <div className="font-semibold">{month.name}</div>
                                <div className="text-neutral-600">{month.price}</div>
                                <div className="text-neutral-600">{month.temp}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationWeather;
