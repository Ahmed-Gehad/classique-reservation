import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // أيقونة القائمة + أيقونة الإغلاق
import logo from './assets/text.jpg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="bg-white shadow-md  px-6 md:px-16 flex justify-between items-center fixed top-0 left-0 w-full z-50">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[100px] cursor-pointer" />
                    </Link>
                </div>

                {/* الروابط - مخفية في الهواتف */}
                <div className="hidden md:flex gap-8 text-lg font-medium">
                    <Link to="/" className="hover:text-green-800 transition duration-300 font-bold">Home</Link>
                    <Link to="/gallery" className="hover:text-green-800 transition duration-300 font-bold">Gallery</Link>
                    <Link to="/about" className="hover:text-green-800 transition duration-300 font-bold">About</Link>
                </div>

                {/* زر القائمة الجانبية */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* إضافة padding أعلى الصفحة لمنع تغطية المحتوى */}
            <div className="pt-20 md:pt-24"></div>

            {/* Overlay عند فتح القائمة الجانبية */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>
            )}

            {/* القائمة الجانبية في الهواتف */}
            <div className={`fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg py-6 px-6 flex flex-col gap-6 text-lg font-medium z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
                {/* زر الإغلاق */}
                <button className="self-end" onClick={() => setIsOpen(false)}>
                    <X size={28} />
                </button>

                <Link to="/" className="hover:text-green-700" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/gallery" className="hover:text-green-700" onClick={() => setIsOpen(false)}>Gallery</Link>
                <Link to="/about" className="hover:text-green-700" onClick={() => setIsOpen(false)}>About</Link>
            </div>
        </>
    );
}

export default Navbar;