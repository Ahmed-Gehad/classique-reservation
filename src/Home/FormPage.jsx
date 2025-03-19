import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientForm({ selectedItems }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        clientName: "",
        contactNo: "",
        event: "",
        eventDate: "",
        guests: ""
    });

    // ✅ تحديث القيم عند الإدخال
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ إرسال البيانات إلى Checkout عند الضغط على زر التأكيد
    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ تخزين بيانات العميل في `localStorage`
        localStorage.setItem("bookingData", JSON.stringify(formData));

        // ✅ الانتقال إلى صفحة `/menu-list` مع إرسال البيانات
        navigate("/menu-list", {
            state: {
                clientData: formData, // ✅ إرسال بيانات العميل
                selectedItems: selectedItems // ✅ إرسال العناصر المختارة
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="ms-10 bg-white p-6 shadow-md rounded-md max-w-lg">
            <h2 className="text-xl font-bold text-center mb-5 text-green-700">📋 بيانات الحجز</h2>

            {/* اسم العميل */}
            <div className="flex flex-col mb-5">
                <label className="font-semibold mb-1">Client Name:</label>
                <input 
                    type="text" 
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="border p-2 rounded-md"
                    required
                />
            </div>

            {/* رقم الهاتف */}
            <div className="flex flex-col mb-5">
                <label className="font-semibold mb-1">Contact No:</label>
                <input 
                    type="text"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="border p-2 rounded-md"
                    required
                />
            </div>

            {/* نوع الحدث */}
            <div className="flex flex-col mb-5">
                <label className="font-semibold mb-1">Event:</label>
                <input 
                    type="text" 
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    placeholder="Type of event"
                    className="border p-2 rounded-md"
                />
            </div>

            {/* تاريخ الحدث */}
            <div className="flex flex-col mb-5">
                <label className="font-semibold mb-1">Date of Event:</label>
                <input 
                    type="date" 
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                />
            </div>

            {/* عدد الضيوف */}
            <div className="flex flex-col mb-5">
                <label className="font-semibold mb-1">Number of Guests:</label>
                <input 
                    type="number" 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    placeholder="Enter number of guests"
                    className="border p-2 rounded-md"
                />
            </div>  

            {/* زر الإرسال */}
            <button 
                type="submit" 
                className="bg-green-700 text-white px-4 py-2 rounded-md w-full hover:bg-green-900 transition"
            >
                ✅ تأكيد الحجز
            </button>
        </form>
    );
}
