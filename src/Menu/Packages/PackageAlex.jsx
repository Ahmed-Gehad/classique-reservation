import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const menuItems = [
    { 
        title: "BUFFET L’OR", 
        content: "Price: 795 EGP For Person", 
        link: "/packages/lor"
    },
    { 
        title: "BUFFET PLATINE", 
        content: "Price: 895 EGP For Person", 
        link: "/packages/platine"
    },
    { 
        title: "BUFFET LE DIAMANT", 
        content: "Price: 995 EGP For Person", 
        link: "/packages/le-diamant"
    },
    { 
        title: "LIVE STATIONS x BUFFET", 
        content: "Price: 1,195 EGP For Person", 
        link: "/packages/live-stations"
    },
];

function PackageCard({ title, content, link }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="relative w-56 h-72 bg-gray-100 text-center flex items-center justify-center font-bold text-lg cursor-pointer shadow-md rounded-md"
            initial={false}
            animate={{ rotateY: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
            onClick={() => setIsOpen(!isOpen)}
        >
            
            {/* الغلاف الأمامي */}
            <div className="absolute inset-0 flex items-end justify-center rounded-md">
                <img src={logo} alt="Book Cover" className="w-full h-full object-cover rounded-md" />
                <span className="absolute text-white font-bold text-lg bg-black/50 px-2 py-2 mb-6 rounded-md">
                    {title}
                </span>
            </div>

            {/* الصفحة الداخلية */}
            <div className="absolute inset-0 bg-white text-black flex flex-col items-center justify-center p-3 rounded-md"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm">{content}</p>
                <Link to={link}>
                    <button className="mt-3 px-3 py-2 bg-green-700 text-white rounded">
                        Open
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}

export default function MenuPage() {
    return (
        <div className="p-6">
            <h1 className="text-5xl text-center text-green-900 pb-10 font-bold">ALEXANDRIA</h1>
            {/* عرض القوائم */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {menuItems.map((item, index) => (
                    <PackageCard 
                        key={index} 
                        title={item.title} 
                        content={item.content} 
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}
