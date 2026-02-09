'use client';

import { useMemo, useState, useEffect } from "react";
import Container from "@/components/Container";
import { AiFillStar } from "react-icons/ai";
import { Heart, Share, Globe, Award, MapPin, Feather, CheckCircle } from "lucide-react"; // Using similar icons
import Image from "next/image";
import { experiences } from "@/data/mockExperiences";

interface ExperienceClientProps {
    experienceId: string;
}

const ExperienceClient: React.FC<ExperienceClientProps> = ({ experienceId }) => {

    // Import the mock data
    // We need to move the import to top level, but for this tool usage I will add it here if possible or I need to update the whole file import section.
    // Actually, I'll update the component logic to find the item.

    // Note: Since I cannot easily add top-level imports with replace_file_content if I'm targeting the function body, 
    // I will assume I can replace the whole file or a large chunk to include imports.
    // However, I will try to use a smaller chunk if possible.
    // Let's replace the whole useMemo logic with a lookup.

    // Using require for now to avoid top-level import complexity in this specific patch if needed, or just assume I can add import at top in next step? 
    // No, I should use replace_file_content on the whole file to be safe and clean.
    // Or I can just search in the mock data if I import it.

    // Let's go with updating the logic to look up in the imported data.
    // I need to add `import { experiences } from "@/data/mockExperiences";` at the top.
    // So I will make two edits or one large edit.
    // I'll make one large edit to the file to include the import and the logic.

    // Wait, to use replace_file_content efficiently, I should do the import first? 
    // No, I'll just rewrite the file content for the component.

    const [experience, setExperience] = useState<any | null>(null);

    useEffect(() => {
        // Find the experience in the mock data
        let found = null;
        for (const section of experiences) {
            const item = section.items.find((i: any) => i.id === experienceId);
            if (item) {
                found = item;
                break;
            }
        }

        if (experienceId === 'orig-7') {
            setExperience({
                ...found, // Keep basic props
                title: "تعافى مثل لاعب أولمبي مع نيفيل رايت",
                subtitle: "تعلم كيفية تحسين تمارينك الرياضية مع اللاعب الأولمبي 3 مرات والمعالج المتخصص في التعافي، احصل على تدريب عملي قبل الانضمام إليه في تحدي حمام الثلج.",
                translationNote: "تمت الترجمة آليًا",
                category: "تمرين",
                subCategory: "التمارين الرياضية",
                host: {
                    name: "Neville",
                    image: "https://a0.muscache.com/im/pictures/user/User-144074284/original/6c66601a-82dc-464a-b5f7-64414ced8374.jpeg?im_w=240",
                    title: "المضيف: Neville",
                    subtitle: "لاعب أولمبي ثلاث مرات لفريق كندا"
                },
                location: {
                    name: "Ceresio 7 Gym & Spa",
                    address: "ميلان، لومبارديا"
                },
                images: [
                    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-5002496-poster/original/fefb876a-360e-436f-b25c-902047644265.jpg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/e86546d1-4228-406e-827c-0c1590463994.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/6198889b-8149-4363-9046-29177197825a.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/98522724-8504-4c6e-8123-289528020836.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/f6595563-71a2-472e-8395-562723321591.jpeg?im_w=720"
                ],
                original: true,
                activities: [
                    {
                        title: "نشّط عقلك وجسمك",
                        description: "لقد شكل الحفاظ على التوازن بين العقل والجسم مسيرتي المهنية - سأخوض في كيفية ذلك عندما تبدأ بالتنقل.",
                        image: "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/8e195745-0370-4f81-9878-360183069151.jpeg?im_w=240"
                    },
                    {
                        title: "القوة في المقاومة",
                        description: "نشّط عضلاتك وزد نطاق حركتك من خلال استخدام أشرطة المقاومة المطاطية.",
                        image: "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/12837380-0081-424d-b940-575487739506.jpeg?im_w=240"
                    },
                    {
                        title: "الحاجة إلى السرعة",
                        description: "تعلم الشكل والمواقف المناسبين وأنا أدربك على ما يجب فعله وما لا يجب فعله في ميكانيكا العدو السريع.",
                        image: "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/03885d56-6548-4389-9b57-679905953508.jpeg?im_w=240"
                    },
                    {
                        title: "تدحرج معها",
                        description: "سأريكم كيفية استخدام الرغوة والكرات الكروية لتعزيز تعافيك وزيادة مرونتك.",
                        image: "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/d0505199-5282-4114-8785-307524958045.jpeg?im_w=240"
                    },
                    {
                        title: "استمتع بالجو البارد",
                        description: "حان وقت حمام الثلج! سأشارك تقنيات للبقاء هادئًا تحت الضغط.",
                        image: "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/c4174365-ea18-498c-8431-157945d82054.jpeg?im_w=240"
                    },
                    {
                        title: "وجبة خفيفة للتعافي",
                        description: "استمع إلى القصص من أيامي الأولمبية بينما تستريح وتستعيد نشاطك.",
                        image: "https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/e5927361-ecf2-4467-9430-811652701198.jpeg?im_w=240"
                    },
                    {
                        title: "غادر مع مجموعة أدواتي",
                        description: "أتم الأمر مع تمارين التنفس للتعافي، ثم سأرسل لك نصائحي وأفضل الممارسات.",
                        image: "https://a0.muscache.com/im/pictures/user/User-144074284/original/6c66601a-82dc-464a-b5f7-64414ced8374.jpeg?im_w=240"
                    }
                ],
                aboutHost: "شاركت في الألعاب الأولمبية ثلاث مرات، وأعمل معالجًا للأداء ومدربًا ومرشدًا، ومثلت كندا في الفريق الوطني في كل من سباقات المضمار والميدان وسباق الدراجات الجماعية لمدة 15 عامًا. بصفتي متحدثًا تحفيزيًا، ألهم الآخرين أيضًا لتحقيق النجاح. لم تكن رحلتي خالية من التحديات وأعرف عن كثب أهمية العمل الجاد والتفاني في تحقيق الأهداف. أحب تقديم نهجي الملهم إلى عالم الرياضة وخارجه، بما في ذلك لكم في ميلانو كورتينا 2026.",
                thingsToKnow: [
                    {
                        title: "المتطلبات المتعلقة بالضيف",
                        description: "يستطيع الضيوف بعمر 13 وأكبر الحضور",
                        icon: "Users"
                    },
                    {
                        title: "مستوى النشاط",
                        description: "مستوى النشاط في هذه التجربة متوسط ومستوى المهارة مبتدئ",
                        icon: "Activity"
                    },
                    {
                        title: "الأشياء الواجب إحضارها",
                        description: "ملابس التمرين أو الملابس الرياضية، أحذية الجري أو التمرين، زجاجة ماء، بدلة سباحة أو شورت لا تمانع في أن تتبلل عند الاستجمام بالماء البارد. يجب على جميع المشاركين تقديم بطاقة تعريف سارية (بطاقة شرف حكومية سارية أو جواز سفر أو رخصة قيادة) عند تسجيل الوصول.",
                        icon: "Bag"
                    },
                    {
                        title: "سهولة الوصول",
                        description: "لا توجد مميزات حسية شديدة وتتوفر مساحة هادئة للاسترخاء. إظهار كل الميزات",
                        icon: "Accessibility"
                    },
                    {
                        title: "سياسة الإلغاء",
                        description: "لاسترداد المبلغ المدفوع بالكامل، يجب الإلغاء قبل 3 أيام على الأقل من موعد البدء.",
                        icon: "Calendar"
                    },
                    {
                        title: "المراجعة الأولية",
                        description: "لضمان تآزر أفضل لكل حجز، يجب على الضيوف الذين قاموا بالحجز اجتياز المراجعة الأولية التي تجريها Airbnb لحضور تجربة السفر هذه، وإلا فقد يتعرض حجزهم للإلغاء. معرفة المزيد",
                        icon: "ShieldCheck"
                    }
                ]
            });
        } else if (found) {
            // Generic fallback for other IDs
            setExperience({
                ...found,
                subtitle: found.location || "تجربة مميزة",
                translationNote: "تمت الترجمة آليًا",
                category: "تجربة",
                subCategory: "ترفيه",
                host: {
                    name: "المضيف",
                    image: "/images/placeholder.jpg",
                    title: `المضيف: ${found.title}`,
                    subtitle: "مضيف متميز"
                },
                location: {
                    name: found.location || "موقع التجربة",
                    address: found.location || ""
                },
                images: [
                    found.imageSrc,
                    found.imageSrc,
                    found.imageSrc,
                    found.imageSrc,
                    found.imageSrc
                ],
                activities: [],
                aboutHost: "مضيف ذو خبرة عالية في تقديم تجارب لا تُنسى.",
                thingsToKnow: []
            });
        } else {
            setExperience(null);
        }

    }, [experienceId]);

    if (!experience) {
        return <div className="pt-32 text-center text-xl">Experience not found</div>;
    }

    return (
        <Container>
            <div className="pt-24 pb-20 max-w-screen-xl mx-auto" dir="rtl">
                {/* Header */}
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-4 max-w-[700px]">
                            <h1 className="text-4xl font-bold leading-tight">{experience.title}</h1>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">{experience.subtitle}</p>
                            <div className="flex items-center gap-2 text-sm text-neutral-500 font-light bg-neutral-100 w-fit px-2 py-1 rounded">
                                <Globe size={14} />
                                <span>{experience.translationNote}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-800 underline font-light cursor-pointer">
                                <span>{experience.category}</span>
                                <span>·</span>
                                <span>{experience.subCategory}</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-1 p-2 hover:bg-neutral-100 rounded-md cursor-pointer text-sm underline font-medium">
                                <Share size={16} />
                                مشاركة
                            </div>
                            <div className="flex items-center gap-1 p-2 hover:bg-neutral-100 rounded-md cursor-pointer text-sm underline font-medium">
                                <Heart size={16} />
                                حفظ
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Grid */}
                <div className="grid grid-cols-4 gap-2 h-[450px] overflow-hidden rounded-2xl mb-12">
                    <div className="col-span-2 row-span-2 relative h-full">
                        <Image fill src={experience.images[0]} alt="hero" className="object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 relative h-full">
                        <Image fill src={experience.images[1]} alt="hero" className="object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 relative h-full">
                        <Image fill src={experience.images[2]} alt="hero" className="object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 relative h-full">
                        <Image fill src={experience.images[3]} alt="hero" className="object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 relative h-full">
                        <Image fill src={experience.images[4]} alt="hero" className="object-cover" />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-semibold border border-neutral-300 shadow-sm flex items-center gap-2 cursor-pointer hover:bg-white hover:shadow-md transition">
                            <div className="grid grid-cols-3 gap-[2px] w-4 h-4">
                                {[...Array(9)].map((_, i) => <div key={i} className="bg-neutral-800 rounded-[1px]" />)}
                            </div>
                            إظهار كل التواريخ
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-4 flex flex-col gap-10">

                        {/* Highlights */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 py-4 border-b border-neutral-200">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image fill src={experience.host.image} alt={experience.host.name} className="object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-bold">{experience.host.title}</h2>
                                    <p className="text-sm text-neutral-500 font-light">{experience.host.subtitle}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1"><Feather size={24} className="text-neutral-800" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">Airbnb Original</h3>
                                    <p className="text-neutral-600 font-light">تم تصميم تمارين رياضية من قبل Neville حصريًا من أجل Airbnb.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1"><MapPin size={24} className="text-neutral-800" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">{experience.location.name}</h3>
                                    <p className="text-neutral-600 font-light">{experience.location.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pb-8 border-b border-neutral-200">
                                <div className="mt-1"><Award size={24} className="text-neutral-800" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">لاعب أولمبي في التزلج على الجليد ثلاث مرات</h3>
                                    <p className="text-neutral-600 font-light">الألعاب الأولمبية الشتوية 2010 و2014 و2018</p>
                                </div>
                            </div>
                        </div>

                        {/* About Host - Moved here to match flow loosely or below activities */}

                        {/* Activities */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">الأنشطة التي ستقوم بها</h2>
                            <div className="flex flex-col gap-8 relative border-r-2 border-neutral-200 mr-4 pr-8">
                                {experience.activities.map((activity: any, index: number) => (
                                    <div key={index} className="relative">
                                        {/* Timeline dot */}
                                        <div className="absolute -right-[39px] top-0 w-4 h-4 bg-white border-4 border-neutral-300 rounded-full" />

                                        <div className="flex gap-4 items-start">
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg mb-1">{activity.title}</h3>
                                                <p className="text-neutral-600 font-light leading-relaxed">{activity.description}</p>
                                            </div>
                                            <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                                <Image fill src={activity.image} alt={activity.title} className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location / Map Placeholder */}
                        <div className="py-8 border-t border-b border-neutral-200">
                            <h2 className="text-2xl font-bold mb-2">مكان الالتقاء</h2>
                            <p className="text-lg font-light mb-1">{experience.location.name}</p>
                            <p className="text-neutral-500 font-light mb-6">20154, ميلان, لومبارديا, إيطاليا</p>

                            <div className="w-full h-[400px] bg-neutral-100 rounded-xl relative overflow-hidden flex items-center justify-center">
                                {/* Mock Map Image */}
                                <Image fill src="https://a0.muscache.com/im/pictures/miso/Hosting-12345/original/map-placeholder.png" alt="Map" className="object-cover opacity-50" />
                                <div className="absolute z-10 flex flex-col items-center">
                                    <div className="bg-black text-white p-2 rounded-full mb-2">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="bg-white px-3 py-1 rounded-md shadow-md font-bold text-sm">
                                        نقطة الالتقاء
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow-sm">
                                    <svg viewBox="0 0 24 24" width="20" height="20" className="block fill-current"><path d="M18 8v-3u-2v3h-3v2h3v3h2v-3h3v-2h-3zM21.11 2.89A5.99 5.99 0 0 0 17 1H7a5.99 5.99 0 0 0-4.11 1.89A5.99 5.99 0 0 0 1 7v10a5.99 5.99 0 0 0 1.89 4.11A5.99 5.99 0 0 0 7 23h10a5.99 5.99 0 0 0 4.11-1.89A5.99 5.99 0 0 0 23 17V7a5.99 5.99 0 0 0-1.89-4.11zM21 17a3.99 3.99 0 0 1-1.17 2.83A3.99 3.99 0 0 1 17 21H7a3.99 3.99 0 0 1-2.83-1.17A3.99 3.99 0 0 1 3 17V7a3.99 3.99 0 0 1 1.17-2.83A3.99 3.99 0 0 1 7 3h10a3.99 3.99 0 0 1 2.83 1.17A3.99 3.99 0 0 1 21 7z"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* About Host Detailed */}
                        <div className="py-8">
                            <h2 className="text-2xl font-bold mb-6">نبذة عني</h2>
                            <div className="bg-white shadow-xl rounded-3xl p-8 flex gap-8 items-start border border-neutral-100">
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl mb-1">Neville</h3>
                                    <p className="text-sm font-light text-neutral-500 mb-6">لاعب أولمبي ثلاث مرات لفريق كندا</p>
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                                        <Image fill src={experience.host.image} alt={experience.host.name} className="object-cover" />
                                    </div>
                                </div>
                                <div className="flex-[2]">
                                    <p className="text-neutral-600 font-light leading-relaxed">{experience.aboutHost}</p>
                                    <button className="mt-6 border border-black rounded-lg px-6 py-3 font-semibold hover:bg-neutral-50 transition block w-full text-center">
                                        إرسال رسالة إلى Neville
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Things to Know */}
                        <div className="py-8 border-t border-neutral-200">
                            <h2 className="text-2xl font-bold mb-6">أشياء يجب معرفتها</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                                {experience.thingsToKnow.map((item: any, i: number) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="mt-1">
                                            {/* Simple icon mapping based on string */}
                                            <CheckCircle size={20} className="text-neutral-800" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-1">{item.title}</h3>
                                            <p className="text-neutral-500 text-sm font-light leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Booking Widget */}
                    <div className="md:col-span-3 relative">
                        <div className="sticky top-28 bg-white border border-neutral-200 shadow-xl rounded-xl p-6">
                            <h2 className="text-2xl font-bold mb-1">بدءًا من $31 <span className="text-base font-light text-neutral-500">/ للضيف</span></h2>
                            <p className="text-[#FF385C] font-semibold text-sm mb-6">إلغاء مجاني</p>

                            <div className="border border-neutral-400 rounded-lg mb-4 cursor-pointer hover:border-black">
                                <div className="p-3 border-b border-neutral-400">
                                    <div className="text-[10px] font-bold uppercase tracking-wider">الجمعة، 13 فبراير</div>
                                    <div className="text-sm font-light text-neutral-500">2:30–5:00 م</div>
                                </div>
                                <div className="p-3">
                                    <div className="text-red-600 text-sm font-bold">يوجد 1 مكان شاغر</div>
                                </div>
                            </div>

                            <button className="w-full bg-[#E51D53] hover:bg-[#D90B3E] text-white font-bold py-3 rounded-lg text-lg transition mb-4">
                                إظهار التواريخ
                            </button>

                            <div className="text-center">
                                <button className="underline text-neutral-500 font-bold">إظهار كل التواريخ</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Logo */}
                <div className="flex justify-center py-20 border-t border-neutral-200 mt-12 bg-[#F7F7F7]">
                    <div className="text-center">
                        <div className="font-bold text-2xl mb-2 flex items-center justify-center gap-2">
                            <span>Airbnb Originals</span>
                            <span className="text-[#D4AF37]"><Feather size={24} fill="#D4AF37" /></span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">صُممت Airbnb Originals<br /> خصيصًا من أجل Airbnb</h3>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ExperienceClient;
