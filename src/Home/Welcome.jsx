import React from 'react'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'


const Welcome = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 px-10 ">
            {/* الخلفية الجمالية */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-900 opacity-20"></div>

            {/* المحتوى الرئيسي */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl z-10 py-10">
                {/* النص وزر Get Started */}
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        We’re delighted to serve you <br /> and offer you the best, always!
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        Experience the best dining experience with our easy-to-use reservation system.
                    </p>
                    <Link >

                        <button className="bg-green-800 hover:bg-green-900 text-white font-semibold py-3 px-6 rounded-lg mt-6 text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* الصورة */}
                <div className="flex justify-center">
                    <img src={logo} alt="Restaurant" className="w-full max-w-md object-contain drop-shadow-lg rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Welcome