import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./assets/logo.webp";


export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState(null);

      // ✅ تحميل بيانات العميل من localStorage عند فتح الصفحة
      useEffect(() => {
        const storedData = localStorage.getItem("bookingData");
        if (storedData) {
            setBookingData(JSON.parse(storedData));
        }
    }, []);


    // ✅ استقبال البيانات من `MenuPage`
    const selectedSubCategory = location.state?.selectedSubCategory || null;
    const selectedManouche = location.state?.selectedManouche || null;
    const selectedItems = location.state?.selectedItems || [];

    // ✅ دالة تأكيد الطلب
    const handleConfirmOrder = () => {
        alert("✅ تم تأكيد طلبك بنجاح! 🎉");
    };

    // ✅ عرض رسالة تحميل البيانات عند عدم توفرها بعد
    if (!bookingData) {
        return <p className="text-center mt-10 text-gray-500">⏳ تحميل البيانات...</p>;
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold text-center mb-6">🛍️ PRELIMINARY INVOICE</h1>

            {/* ✅ عرض بيانات العميل */}
            <div className="bg-gray-100 p-4 rounded-md mb-6 shadow-md text-lg">
                <h2 className="text-xl font-bold mb-3">👤 معلومات العميل:</h2>
                <p><strong>📌 Client Name:</strong> {bookingData.clientName || "غير محدد"}</p>
                <p><strong>📞 Contact No.:</strong> {bookingData.contactNo || "غير محدد"}</p>
                <p><strong>🎉 Event:</strong> {bookingData.event || "غير محدد"}</p>
                <p><strong>📅 Date of Event:</strong> {bookingData.eventDate || "غير محدد"}</p>
                <p><strong>👥 Number of Guests:</strong> {bookingData.guests || "غير محدد"}</p>
            </div>

            {/* ✅ عرض The Manouche إذا تم اختيارها */}
            {selectedManouche && (
                <p className="text-md font-semibold text-green-700">🥖 {selectedManouche} Selected</p>
            )}

            {/* ✅ عرض باقة BEVERAGES إذا تم اختيارها */}
            {selectedSubCategory && (
                <p className="text-md pt-4 font-semibold text-green-700">🥤 BEVERAGES {selectedSubCategory}</p>
            )}

            {/* ✅ عرض بقية العناصر المختارة من القوائم الأخرى */}
            {selectedItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {selectedItems.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-md p-4 text-center">
                            <img
                                src={logo}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-md mb-3"
                            />
                            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">⚠️ لم تقم باختيار أي عناصر.</p>
            )}

            {/* 🔹 زر تأكيد الطلب */}
            <div className="flex justify-center mt-6">
                <button
                    className="px-6 py-3 rounded-md bg-green-700 text-white hover:bg-green-900 transition"
                    onClick={handleConfirmOrder}
                >
                    ✅ تأكيد الطلب
                </button>
            </div>

            {/* 🔙 زر الرجوع إلى القائمة مع الاحتفاظ بالعناصر */}
            <div className="flex justify-center mt-4">
                <button
                    className="px-6 py-3 rounded-md bg-gray-400 text-white hover:bg-gray-600 transition"
                    onClick={() => navigate(-1)}
                >
                    🔙 الرجوع للتعديل
                </button>
            </div>
        </div>
    );
}






