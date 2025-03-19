import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../assets/logo.webp"

// ✅ بيانات القوائم
const menuItems = [
    { 
        title: "Main Menu", 
        content: "Start from 10PAX to 50PAX", 
        image: "/Main Menu.jpg", 
        city: ["Cairo", "Alexandria"], 
        linkCairo: "/cairo/main-menu", 
        linkAlexandria: "/alexandria/main-menu" 
    },
    { 
        title: "Set Menu", 
        content: "Lets Choose from our 3 Packages", 
        image: "/Set Menu.jpg", 
        city: ["Cairo", "Alexandria"], 
        linkCairo: "/cairo/set-menu", 
        linkAlexandria: "/alexandria/set-menu" 
    },
    { 
        title: "Finger Food", 
        content: "Savor our finest dinner dishes!", 
        image: "/Finger Food.jpg", 
        city: ["Cairo", "Alexandria"], 
        linkCairo: "/cairo/finger-food", 
        linkAlexandria: "/alexandria/finger-food" 
    },
    { 
        title: "Packages", 
        content: "Lets Choose from our 4 Packages", 
        image: "/Packages.jpg", 
        city: ["Cairo", "Alexandria"], 
        linkCairo: "/cairo/packages", 
        linkAlexandria: "/alexandria/packages" 
    },
    { 
        title: "Live Stations", 
        content: "Experience live cooking!", 
        image: "/Live Stations.jpg", 
        city: ["Cairo", "Alexandria"], 
        linkCairo: "/cairo/live-stations", 
        linkAlexandria: "/alexandria/live-stations" 
    }
];

// ✅ مكون عرض القائمة
function MenuCard({ title, content, image, linkCairo, linkAlexandria, selectedCity }) {
    const [isOpen, setIsOpen] = useState(false);

    // ✅ تحديد الرابط الصحيح بناءً على المدينة المختارة
    const link = selectedCity === "Cairo" ? linkCairo : linkAlexandria;

    return (
        <motion.div
            className="relative w-64 h-80 text-white text-center flex items-center justify-center font-bold text-2xl cursor-pointer shadow-lg rounded-md"
            initial={false}
            animate={{ rotateY: isOpen ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* الغلاف */}
            <div className="absolute inset-0 flex items-end justify-center rounded-md">
                <img src={logo} alt={title} className="w-full h-full object-cover rounded-md" />
                <span className="absolute text-white font-bold text-2xl bg-black/50 px-4 mb-10 rounded-md">{title}</span>
            </div>

            {/* الصفحة الداخلية */}
            <div className="absolute inset-0 bg-white text-black flex flex-col items-center justify-center p-4 rounded-md"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm">{content}</p>
                <Link to={link}>
                    <button className="mt-4 px-4 py-2 bg-green-900 text-white rounded" onClick={() => setIsOpen(false)}>
                        Open
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}

// ✅ مكون عرض جميع القوائم
export default function MenuList() {
    const [selectedCity, setSelectedCity] = useState("Cairo");

    // ✅ تصفية القوائم بناءً على المدينة المختارة
    const filteredMenu = menuItems.filter(item => item.city.includes(selectedCity));

    return (
        <div className="p-10">
            {/* أزرار اختيار المدينة */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded ${selectedCity === "Alexandria" ? "bg-green-800 text-white" : "bg-gray-300"}`}
                    onClick={() => setSelectedCity("Alexandria")}
                >
                    الإسكندرية
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCity === "Cairo" ? "bg-green-800 text-white" : "bg-gray-300"}`}
                    onClick={() => setSelectedCity("Cairo")}
                >
                    القاهرة
                </button>
            </div>

            {/* عرض القوائم بناءً على الفلتر */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredMenu.length > 0 ? (
                    filteredMenu.map((item, index) => (
                        <MenuCard 
                            key={index} 
                            title={item.title} 
                            content={item.content} 
                            image={item.image} // ✅ استخدام الصورة الصحيحة
                            linkCairo={item.linkCairo} 
                            linkAlexandria={item.linkAlexandria} 
                            selectedCity={selectedCity} 
                        />
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-500">⚠️ لا توجد قوائم متاحة لهذه المدينة.</p>
                )}
            </div>
        </div>
    );
}
