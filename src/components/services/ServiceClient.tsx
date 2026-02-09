'use client';

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import { AiFillStar } from "react-icons/ai";
import { Heart, Share, ShieldCheck, Globe, Languages } from "lucide-react";
import Image from "next/image";
import { services } from "@/data/mockServices";

interface ServiceClientProps {
    serviceId: string;
}

const ServiceClient: React.FC<ServiceClientProps> = ({ serviceId }) => {
    const [service, setService] = useState<any | null>(null);

    useEffect(() => {
        console.log("ServiceClient: serviceId=", serviceId); // Debug log
        let found = null;
        for (const section of services) {
            console.log("Checking section:", section.title);
            const item = section.items.find((i: any) => i.id === serviceId);
            if (item) {
                console.log("Found item:", item);
                found = item;
                break;
            }
        }

        if (found) {
            setService(found);
        } else {
            console.log("Item not found!");
        }
    }, [serviceId]);

    if (!service) return <div className="pt-32 text-center text-red-500">Service not found for ID: {serviceId}</div>;

    // Use specific data if available, or fallback to generic data
    const packages = service.packages || [];
    const reviews = service.reviews || [];
    const hostName = service.hostName || "Carlo";
    const hostImage = service.hostImage || service.imageSrc;
    const subtitle = service.subtitle || service.title;

    return (
        <div className="pb-32 bg-white" dir="rtl">
            <Container>
                <div className="pt-8 max-w-screen-xl mx-auto">

                    {/* Navigation Breadcrumb Placeholder if needed */}

                    {/* Header Image & Host Overlap */}
                    <div className="relative mb-24">
                        <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-sm">
                            <Image
                                fill
                                src={service.imageSrc}
                                alt={service.title}
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Overlapping Host Avatar */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                                <Image
                                    fill
                                    src={hostImage}
                                    alt={hostName}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Title Section Centered */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                        <p className="text-lg text-neutral-600 font-light leading-relaxed mb-4">
                            {subtitle}
                        </p>

                        <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mb-6">
                            <Languages size={16} />
                            <span>تمت الترجمة آليًا</span>
                        </div>

                        <div className="flex items-center justify-center gap-1 text-sm font-semibold">
                            <AiFillStar size={14} />
                            <span>{service.rating || "4.97"}</span>
                            <span className="text-neutral-500 mx-1">·</span>
                            <span className="underline cursor-pointer text-neutral-500">245 مراجعة</span>
                            <span className="text-neutral-500 mx-1">·</span>
                            <span className="text-neutral-500">شيف في Rome</span>
                        </div>
                        <div className="text-center text-xs text-neutral-400 mt-1">يتم تقديمها في بيتك</div>

                        <div className="flex justify-center gap-6 mt-6">
                            <div className="p-3 rounded-full hover:bg-neutral-100 cursor-pointer transition">
                                <Share size={20} className="text-neutral-700" />
                            </div>
                            <div className="p-3 rounded-full hover:bg-neutral-100 cursor-pointer transition">
                                <Heart size={20} className="text-neutral-700" />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-neutral-200 my-12" />

                    {/* Packages / Menu List */}
                    <div className="max-w-4xl mx-auto">
                        {packages.map((pkg: any, idx: number) => (
                            <div key={idx} className="group flex flex-col md:flex-row gap-6 items-start py-8 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 p-4 rounded-xl transition cursor-pointer">
                                <div className="relative w-full md:w-48 h-48 md:h-32 rounded-xl overflow-hidden shrink-0 shadow-sm">
                                    <Image fill src={pkg.image} alt={pkg.title} className="object-cover group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2 block">
                                        <h3 className="font-bold text-lg text-neutral-800">{pkg.title}</h3>
                                        <div className="font-bold text-neutral-800 text-lg" dir="ltr">${pkg.price} <span className="text-xs text-neutral-500 font-normal">/ الضيف</span></div>
                                    </div>
                                    <p className="text-neutral-500 text-sm font-light leading-relaxed line-clamp-3 md:line-clamp-none">
                                        {pkg.description}
                                    </p>
                                    <div className="mt-4 text-xs font-bold text-neutral-400">
                                        الحد الأدنى للحجز $353
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Reviews Section */}
                    <div className="max-w-6xl mx-auto mt-16">
                        <div className="flex items-center gap-2 mb-8">
                            <AiFillStar size={24} />
                            <h2 className="text-2xl font-bold" dir="ltr">4.97 · 245 تقييمًا</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {reviews.map((review: any, idx: number) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image fill src={review.avatar} alt={review.name} className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900">{review.name}</h4>
                                            <div className="text-neutral-500 text-sm">{review.location}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-neutral-800">
                                        <div className="flex">{[...Array(5)].map((_, i) => <AiFillStar key={i} size={10} />)}</div>
                                        <span>·</span>
                                        <span>{review.date}</span>
                                        <span>·</span>
                                        <span>منذ 1 أسبوع</span>
                                    </div>
                                    <p className="text-neutral-700 text-base leading-relaxed font-light">
                                        {review.comment}
                                    </p>
                                    <div className="font-bold underline text-sm cursor-pointer mt-1 text-neutral-800">عرض المزيد</div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-12 border border-black rounded-lg px-8 py-3 font-semibold hover:bg-neutral-50 transition w-full md:w-auto">
                            إظهار كل التقييمات (245)
                        </button>
                    </div>

                    {/* Logo/Footer Branding Section */}
                    {/* Not implemented fully as it's just footer content, effectively covered by global footer */}

                    {/* Quality Seal Section */}
                    <div className="mt-24 mb-12 bg-[#F7F7F7] rounded-2xl p-12 text-center flex flex-col items-center gap-6">
                        <div className="relative w-24 h-24">
                            <Image
                                fill
                                src="https://a0.muscache.com/pictures/ec29938b-0701-445a-8395-9279097e3ae3.jpg" // Valid Airbnb/Gold seal placeholder from mock if needed, or use emoji/icon for now as placeholder is risky.
                                // Let's use a generated Gold Seal or a valid icon.
                                // I will use a reliable Unsplash gold texture or icon for now and mask it, or just a heavy SVG.
                                alt="Quality Seal"
                                className="object-contain" // Placeholder logic
                            />
                            {/* SVG Fallback if image fails or for better quality */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[#D4AF37] rounded-full text-white shadow-lg">
                                <ShieldCheck size={48} />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold max-w-md">
                            يتم التحقق من الخدمات التي يقدمها "شيف" على Airbnb للتأكد من جودتها
                        </h2>
                    </div>

                </div>
            </Container>

            {/* Bottom Floating Booking Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-10">
                    <div className="flex flex-col">
                        <div className="text-sm">
                            <span className="font-bold text-lg">بدءًا من $83</span>
                            <span className="text-neutral-500 font-light"> / للضيف</span>
                        </div>
                        <div className="text-[10px] text-[#E51D55] font-bold">
                            إلغاء مجاني
                        </div>
                    </div>

                    <button className="bg-[#E51D55] hover:bg-[#d90b46] text-white font-bold py-3 px-8 rounded-lg text-lg transition shadow-md">
                        إظهار التواريخ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceClient;
