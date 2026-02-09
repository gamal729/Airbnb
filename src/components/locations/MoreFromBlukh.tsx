'use client';

import Image from "next/image";

const MoreFromBlukh = () => {
    return (
        <div className="py-12 border-b border-neutral-200">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800 text-center">المزيد من Blukh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group">
                    <Image
                        src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2670&auto=format&fit=crop"
                        alt="Blukh Services"
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">الخدمات على Blukh</h3>
                        <p className="text-sm opacity-90">أضف نكهة مميزة إلى إقامتك</p>
                    </div>
                </div>

                <div className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group">
                    <Image
                        src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2673&auto=format&fit=crop"
                        alt="Blukh Experiences"
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">تجارب السفر على Blukh</h3>
                        <p className="text-sm opacity-90">جرب شيئًا جديدًا</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreFromBlukh;
