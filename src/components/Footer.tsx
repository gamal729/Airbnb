'use client';

import { useState } from "react";
import Container from "./Container";
import { Globe, ChevronDown } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { decode } from "querystring";

const Footer = () => {
    const pathname = usePathname();
    const isLocationPage = pathname?.startsWith('/locations/');
    const [activeTab, setActiveTab] = useState("رائج");
    const [activeLocationTab, setActiveLocationTab] = useState("الوجهات المجاورة");

    // Main Footer Data
    const tabs = [
        "رائج",
        "الفنون والثقافة",
        "في الهواء الطلق",
        "الجبال",
        "الشاطئ",
        "الفئات",
        "الأنشطة"
    ];

    const content: Record<string, { city: string, type: string }[]> = {
        "رائج": [
            { city: "سافانا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "كانساس سيتي", type: "بيوت للإيجار" },
            { city: "كليفلاند", type: "شقق للإيجار" },
            { city: "هونولولو", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "طوكيو", type: "فيلات للإيجار" },
            { city: "دالاس", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "أوشن سيتي", type: "بيوت للإيجار" },
            { city: "كيوتو", type: "شقق للإيجار" },
            { city: "غالفستون", type: "الإيجارات الشهرية" },
            { city: "سان خوان", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "بيتسبرغ", type: "بيوت للإيجار" },
            { city: "مونتريال", type: "الإيجارات الشهرية" },
            { city: "لندن", type: "الإيجارات الشهرية" },
            { city: "دبي", type: "الإيجارات الشهرية" },
            { city: "بورتلاند", type: "الإيجارات الشهرية" },
            { city: "فورت لودرديل", type: "بيوت للإيجار" },
            { city: "لوس أنجلوس", type: "شقق للإيجار" },
        ],
        "الفنون والثقافة": [
            { city: "الجاليريا", type: "شقق للإيجار" },
            { city: "سانتا تيريزا", type: "بيوت للإيجار" },
            { city: "منتجع نورث ستار كاليفورنيا", type: "شقق للإيجار" },
            { city: "حديقة نورث كاسكيدز الوطنية", type: "أكواخ للإيجار" },
            { city: "ساحل أمالفي", type: "بيوت للإيجار" },
            { city: "باريس", type: "شقق للإيجار" },
            { city: "الحديقة الوطنية الأولمبية", type: "شقق للإيجار" },
            { city: "ملعب سوفي", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "San Diego Convention Center", type: "بيوت للإيجار" },
            { city: "منتجع التزلج جاك فروست", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "ملعب لامبو فيلد", type: "بيوت للإيجار" },
            { city: "قناة سان مارتن", type: "شقق للإيجار" },
            { city: "مركز بيلير ماونتن للتزلج", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "طائرة هليكوبتر لمنتجع تزلج", type: "شقق للإيجار" },
            { city: "جزر كورونادو", type: "بيوت للإيجار" },
            { city: "Haeundae Beach", type: "شقق للإيجار" },
            { city: "حديقة Cuyahoga Valley الوطنية", type: "بيوت للإيجار" },
        ],
        "في الهواء الطلق": [
            { city: "كورفاليس", type: "بيوت للإيجار" },
            { city: "آنا ماريا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "كوزوميل", type: "شقق للإيجار" },
            { city: "ماراثون", type: "أكواخ للإيجار" },
            { city: "ماموث لاكيس", type: "شقق للإيجار" },
            { city: "جريندلفالد", type: "شقق للإيجار" },
            { city: "مورو باي", type: "شقق للإيجار" },
            { city: "كيهاي", type: "مساكن للإيجار بإطلالة على الشاطئ" },
            { city: "برادنتون بيتش", type: "مساكن للإيجار بإطلالة على الشاطئ" },
            { city: "فرجينيا بيتش", type: "مساكن للإيجار بإطلالة على الشاطئ" },
            { city: "فريتسفيل بيتش", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "نخلة جميرا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "أبلاند بارك", type: "شقق للإيجار" },
            { city: "بونتا دي ميتا", type: "مساكن للإيجار بإطلالة على الشاطئ" },
            { city: "أوفيتا", type: "شقق للإيجار" },
            { city: "أكومال", type: "شقق للإيجار" },
            { city: "تاهو سيتي", type: "مساكن للإيجار لقضاء العطلات" },
        ],
        "الجبال": [
            { city: "وايتفيش", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "كاليسيبل", type: "مساكن للإيجار مناسبة لأصحاب الحيوانات الأليفة" },
            { city: "وينسفيل", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "فوليرتون", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "رينو", type: "شقق للإيجار" },
            { city: "سانيقال", type: "شقق للإيجار" },
            { city: "كارسون سيتي", type: "الإيجارات الشهرية" },
            { city: "هاريسونبرج", type: "الإيجارات الشهرية" },
            { city: "دورانغو", type: "بيوت للإيجار" },
            { city: "أوغدن", type: "أكواخ للإيجار" },
            { city: "باكيي", type: "بيوت للإيجار" },
            { city: "كودي", type: "شقق للإيجار" },
            { city: "ألفاريتا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "مدينة غواتيمالا", type: "بيوت للإيجار" },
            { city: "برغن", type: "بيوت للإيجار" },
            { city: "توسان", type: "شقق للإيجار" },
            { city: "أيداهو سبرينغز", type: "أكواخ للإيجار" },
        ],
        "الشاطئ": [ // Mapped to "على الشاطئ"
            { city: "شاطئ بلايا كونشال", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "بلايا نيغرا", type: "شقق للإيجار" },
            { city: "ناكسوس", type: "الإيجارات الشهرية" },
            { city: "شاطئ سوسوا", type: "شقق للإيجار" },
            { city: "ألبوفيرا", type: "مساكن للإيجار بإطلالة على الشاطئ" },
            { city: "شاطئ Belmar", type: "مساكن للإيجار بإطلالة على الشاطئ" },
            { city: "شاطئ جومتين", type: "بيوت للإيجار" },
            { city: "شاطئ هيريكيتيا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "وايكيكي بيتش", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "هنا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "Kata Beach", type: "مساكن للإيجار بإطلالة على الشاطئ" },
            { city: "بلايا سان دييغو", type: "الإيجارات الشهرية" },
            { city: "شاطئ Pipa", type: "فيلات للإيجار" },
            { city: "باسيفيك بيتش", type: "شقق للإيجار" },
            { city: "زيبوليت، أواخاكا", type: "نُزُل للإيجار" },
            { city: "Negril Seven Mile Beach", type: "شقق للإيجار" },
            { city: "جاميكا بيتش", type: "مساكن للإيجار لقضاء العطلات" },
        ],
        "الفئات": [
            { city: "مسابح رائعة", type: "فيلات" },
            { city: "أكواخ", type: "خلوات ريفية" },
            { city: "مساكن صغيرة", type: "تجارب فريدة" },
            { city: "جزر", type: "إجازات استوائية" },
        ],
        "الأنشطة": [
            { city: "مكسيكو سيتي", type: "الصحة والعافية" },
            { city: "دورهاَم", type: "الطعام والشراب" },
            { city: "أبينيني", type: "الترفيه" },
            { city: "Honshu", type: "الطبيعة والهواء الطلق" },
            { city: "سان خوان", type: "الطبيعة والهواء الطلق" },
            { city: "السين", type: "الجولات" },
            { city: "باريس", type: "زيارة المعالم السياحية" },
            { city: "روما", type: "الأنشطة الرياضية" },
            { city: "طوكيو", type: "الطعام والشراب" },
            { city: "Tama River", type: "زيارة المعالم السياحية" },
            { city: "نهر ميديلين", type: "أنشطة" },
            { city: "بلينفيو", type: "الأنشطة الرياضية" },
            { city: "ميديلين", type: "الأنشطة الرياضية" },
            { city: "خواربز", type: "أنشطة" },
            { city: "Tokyo Bay", type: "الأنشطة الرياضية" },
            { city: "Roma Norte", type: "أنشطة" },
            { city: "فلورنسا", type: "الأنشطة الرياضية" },
        ]
    };

    // Location Page Data
    const locationTabs = [
        "الوجهات المجاورة",
        "أنواع أخرى من الإقامة",
        "أبرز المعالم القريبة",
        "أنشطة"
    ];

    const locationContent: Record<string, { city: string, type: string }[]> = {
        "الوجهات المجاورة": [
            { city: "Central Florida", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "نهر سانت جونز", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "أورلاندو", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "Western North Carolina", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "أتلانتا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "الزوايا الأربع", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "تامبا", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "كيسيمي", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "ميرتل بيتش", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "غاتلينبورغ", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "تشارلستون", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "شارلوت", type: "مساكن للإيجار لقضاء العطلات" },
            { city: "شارلوت", type: "مساكن للإيجار لقضاء العطلات" },
        ],
        // Mock content for other tabs to prevent errors if clicked
        "أنواع أخرى من الإقامة": [],
        "أبرز المعالم القريبة": [],
        "أنشطة": []
    };

    // Breadcrumb Logic
    const cityName = pathname?.split('/').pop() || "";
    const decodedCity = decodeURI(cityName);

    if (isLocationPage) {
        return (
            <footer className="bg-neutral-100 border-t border-neutral-200 text-sm" dir="rtl">
                <Container>
                    <div className="py-12 border-b border-neutral-200">
                        <h2 className="text-xl font-medium mb-4 text-neutral-800">وجهات يمكنك استكشافها</h2>

                        <div className="flex gap-6 overflow-x-auto pb-4 mb-4 border-b border-neutral-200 no-scrollbar">
                            {locationTabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveLocationTab(tab)}
                                    className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-colors ${activeLocationTab === tab
                                        ? "border-neutral-800 text-neutral-800"
                                        : "border-transparent text-neutral-500 hover:text-neutral-700"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
                            {locationContent[activeLocationTab]?.map((item, index) => (
                                <Link href="#" key={index} className="flex flex-col gap-0.5 cursor-pointer hover:bg-neutral-50 px-2 -mx-2 rounded-md transition">
                                    <span className="font-semibold text-neutral-800 text-sm md:truncate">{item.city}</span>
                                    <span className="text-neutral-500 text-xs md:truncate">{item.type}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-12 flex items-center gap-2 text-sm text-neutral-500">
                            <span className="font-bold text-neutral-800">Blukh</span>
                            <span>›</span>
                            <span className="hover:underline cursor-pointer text-neutral-800">الولايات المتحدة</span>
                            <span>›</span>
                            <span className="hover:underline cursor-pointer text-neutral-800">جورجيا</span>
                            <span>›</span>
                            <span className="hover:underline cursor-pointer text-neutral-800">مقاطعة تشاتاام</span>
                            <span>›</span>
                            <span className="font-semibold text-neutral-800">{decodedCity || "سافانا"}</span>
                        </div>
                    </div>


                    <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap items-center gap-4 md:order-2">
                            <a href="#" className="hover:text-neutral-800 transition"><FaFacebookF size={18} /></a>
                            <a href="#" className="hover:text-neutral-800 transition"><FaTwitter size={18} /></a>
                            <a href="#" className="hover:text-neutral-800 transition"><FaInstagram size={18} /></a>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 md:order-1 text-center md:text-right text-neutral-500">
                            <span>© 2026 Blukh, Inc.</span>
                            <div className="hidden md:block">·</div>
                            <a href="#" className="hover:underline">الخصوصية</a>
                            <div className="hidden md:block">·</div>
                            {/* <a href="#" className="hover:underline">الخريطة</a>
                            <div className="hidden md:block">·</div> */}
                            <a href="#" className="hover:underline">البنود</a>
                            <div className="hidden md:block">·</div>
                            <a href="#" className="hover:underline">خريطة الموقع</a>
                        </div>
                    </div>
                </Container>
            </footer>
        )
    }

    return (
        <footer className="bg-neutral-100 border-t border-neutral-200 text-sm" dir="rtl">
            <Container>
                <div className="py-12 border-b border-neutral-200">
                    <h2 className="text-xl font-medium mb-4 text-neutral-800">احصل على الإلهام للرحلات المستقبلية</h2>

                    <div className="flex gap-6 overflow-x-auto pb-4 mb-4 border-b border-neutral-200 no-scrollbar">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-colors ${activeTab === tab
                                    ? "border-neutral-800 text-neutral-800"
                                    : "border-transparent text-neutral-500 hover:text-neutral-700"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
                        {content[activeTab]?.map((item, index) => (
                            <Link href={`/locations/${item.city}`} key={index} className="flex flex-col gap-0.5 cursor-pointer hover:bg-neutral-50 px-2 -mx-2 rounded-md transition">
                                <span className="font-semibold text-neutral-800 text-sm md:truncate">{item.city}</span>
                                <span className="text-neutral-500 text-xs md:truncate">{item.type}</span>
                            </Link>
                        ))}
                        <div className="flex flex-col gap-0.5 cursor-pointer items-start justify-center px-2">
                            <span className="font-semibold text-neutral-800 text-sm flex items-center gap-1">
                                عرض المزيد <ChevronDown size={16} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-neutral-200">
                    {/* Column 1: Support */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-neutral-800">الدعم</h3>
                        <div className="flex flex-col gap-3 text-neutral-600">
                            <a href="#" className="hover:underline">مركز المساعدة</a>
                            <a href="#" className="hover:underline">الحصول على مساعدة بشأن مشكلة تتعلق بالسلامة</a>
                            <a href="#" className="hover:underline">BlukhCover</a>
                            <a href="#" className="hover:underline">مناهضة التمييز</a>
                            <a href="#" className="hover:underline">دعم ذوي الاحتياجات</a>
                            <a href="#" className="hover:underline">خيارات الإلغاء</a>
                            <a href="#" className="hover:underline">إبلاغ عن مخاوف في الحي</a>
                        </div>
                    </div>

                    {/* Column 2: Hosting */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-neutral-800">الاستضافة</h3>
                        <div className="flex flex-col gap-3 text-neutral-600">
                            <a href="#" className="hover:underline">اعرض بيتك على Blukh</a>
                            <a href="#" className="hover:underline">اعرض تجربة السفر التي تقدمها على Blukh</a>
                            <a href="#" className="hover:underline">اعرض الخدمة التي تقدمها على Blukh</a>
                            <a href="#" className="hover:underline">حماية BlukhCover للمضيفين</a>
                            <a href="#" className="hover:underline">موارد الاستضافة</a>
                            <a href="#" className="hover:underline">منتدى المجتمع</a>
                            <a href="#" className="hover:underline">الاستضافة بمسؤولية</a>
                            <a href="#" className="hover:underline">الانضمام إلى دورة مجانية عن الاستضافة</a>
                            <a href="#" className="hover:underline">اعثر على مضيف مشارك</a>
                            <a href="#" className="hover:underline">إحالة مضيف</a>
                        </div>
                    </div>

                    {/* Column 3: Airbnb */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-neutral-800">Blukh</h3>
                        <div className="flex flex-col gap-3 text-neutral-600">
                            <a href="#" className="hover:underline">غرفة الأخبار</a>
                            <a href="#" className="hover:underline">الميزات الجديدة</a>
                            <a href="#" className="hover:underline">الوظائف</a>
                            <a href="#" className="hover:underline">المستثمرون</a>
                            <a href="#" className="hover:underline">بطاقات الهدايا</a>
                            <a href="#" className="hover:underline">Blukh.org للطوارئ</a>
                        </div>
                    </div>
                </div>

                <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap items-center gap-4 md:order-2">
                        <button className="flex items-center gap-2 hover:underline font-semibold text-neutral-800">
                            <Globe size={18} />
                            <span>العربية</span>
                        </button>
                        <button className="flex items-center gap-2 hover:underline font-semibold text-neutral-800">
                            <span>$</span>
                            <span>USD</span>
                        </button>
                        <div className="flex items-center gap-4 mr-4">
                            <a href="#" className="hover:text-neutral-800 transition"><FaFacebookF size={18} /></a>
                            <a href="#" className="hover:text-neutral-800 transition"><FaTwitter size={18} /></a>
                            <a href="#" className="hover:text-neutral-800 transition"><FaInstagram size={18} /></a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 md:order-1 text-center md:text-right text-neutral-500">
                        <span>© 2026 Blukh, Inc.</span>
                        <div className="hidden md:block">·</div>
                        <a href="#" className="hover:underline">الخصوصية</a>
                        <div className="hidden md:block">·</div>
                        <a href="#" className="hover:underline">الخريطة</a>
                        <div className="hidden md:block">·</div>
                        <a href="#" className="hover:underline">البنود</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
