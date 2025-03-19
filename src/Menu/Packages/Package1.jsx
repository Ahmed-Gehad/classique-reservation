import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

// قائمة الفئات الرئيسية
const categories = [
    "Bread", "Salads", "The Manouche", "Starters",
    "Sides", "BBQ Grill", "Main Courses", "Desserts", "BEVERAGES"
];

// عناوين الفئات
const categoryTitles = {
    "Bread": "Enjoy Our Freshly Baked Bread",
    "Salads": "(a choice of 6)",
    "The Manouche": "(Addition of 45 EGP per person for all items)",
    "Starters": "(a choice of 3)",
    "Sides": "(a choice of 4)",
    "BBQ Grill": "For Outdoor Events only, with a fixed cost of 3,950 EGP Choose Two ",
    "Main Courses": "(a choice of 3)",
    "Desserts": "(a choice of 4)"
};

// القوائم الفرعية لكل فئة
const subMenuItems = {
    "Salads": ["International", "Oriental"],
    "Main Courses": ["Beef & Veal", "Poultry", "Fish"],
    "Desserts": ["Gateaux Soiree", "Bowls & Chafing Dishes"],
    "BEVERAGES": ["Fresh Juice & Cold Drinks Package", "Hot Drinks, Cold Drinks & Fresh Juice", "MOCKTAILS PACKAGE", "Serveis Only"]
};

// مكون العنصر في القائمة
function MenuCard({ title, content, image, isSelected, onSelect, onImageClick }) {
    return (
        <div className="bg-white shadow-lg rounded-md p-4 text-center transition hover:scale-105">
            <img
                src={logo}
                alt={title}
                className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => onImageClick(logo)}
            />
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-600">{content}</p>
            <button
                className={`mt-4 px-4 py-2 rounded w-full transition ${isSelected ? "bg-green-800 text-white" : "bg-gray-300"}`}
                onClick={onSelect}
            >
                {isSelected ? "✓ Selected" : "Select"}
            </button>
        </div>
    );
}

// مكون الصفحة الرئيسية للقائمة
export default function MenuPage() {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Bread");
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [fullScreenImage, setFullScreenImage] = useState(null);

    // ✅ تحميل البيانات عند تحميل الصفحة
    useEffect(() => {
        fetch("/items.json") // جلب البيانات من ملف JSON
            .then((response) => response.json())
            .then((data) => {
                console.log("✅ البيانات المحملة:", data);
                setMenuItems(data);
            })
            .catch((error) => console.error("❌ خطأ في تحميل البيانات:", error));
    }, []);

    // ✅ تحديث `filteredMenu` عند تغيير `selectedCategory` أو `selectedSubCategory`
    const filteredMenu = menuItems.filter(item => {
        console.log("🔍 فحص العنصر:", item.title, "| الفئة:", item.category, "| القائمة الفرعية:", item.subCategory);

        return item.category === selectedCategory &&
            (!selectedSubCategory || (item.subCategory && item.subCategory === selectedSubCategory));
    });

    // ✅ تحديث `selectedSubCategory` عند تغيير `selectedCategory`
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedSubCategory(null);
    };

    // ✅ تحديد العناصر المختارة
    const handleSelect = (item) => {
        setSelectedItems((prevSelected) =>
            prevSelected.some(selected => selected.title === item.title)
                ? prevSelected.filter(selected => selected.title !== item.title)
                : [...prevSelected, item]
        );
    };
    // تحديد جميع عناصر The Manouche
    const handleAddAllTheManouche = () => {
        const manoucheItems = menuItems.filter(item => item.category === "The Manouche");

        setSelectedItems(prevSelected => {
            const allSelected = manoucheItems.every(item =>
                prevSelected.some(selected => selected.title === item.title)
            );

            return allSelected
                ? prevSelected.filter(item => item.category !== "The Manouche")
                : [...prevSelected, ...manoucheItems.filter(item => !prevSelected.some(selected => selected.title === item.title))];
        });
    };

    // تحديد جميع العناصر في القائمة الفرعية المختارة داخل BEVERAGES
    const handleAddAllBeveragesSubmenu = (subCategory) => {
        if (!subCategory) return;

        const beveragesItems = menuItems.filter(item =>
            item.category === "BEVERAGES" && item.subCategory === subCategory
        );

        setSelectedItems(prevSelected => {
            const allSelected = beveragesItems.every(item =>
                prevSelected.some(selected => selected.title === item.title)
            );

            return allSelected
                ? prevSelected.filter(item => !(item.category === "BEVERAGES" && item.subCategory === subCategory))
                : [...prevSelected, ...beveragesItems.filter(item => !prevSelected.some(selected => selected.title === item.title))];
        });
    };


    return (
        <div className="p-10">
            {/* ✅ أزرار الفئات الرئيسية */}
            <div className="flex justify-center flex-wrap gap-3 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded transition ${selectedCategory === category ? "bg-green-800 text-white scale-110" : "bg-gray-300"}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <h2 className="text-xl font-bold text-center mb-4 text-green-800">
                {categoryTitles[selectedCategory]}
                {selectedCategory === "The Manouche" && (
                    <button
                        className="px-3 py-1 text-sm bg-green-700 text-white rounded-md ml-4 transition hover:bg-green-900"
                        onClick={handleAddAllTheManouche}
                    >
                        {selectedItems.some(item => item.category === "The Manouche") ? "Remove All" : "Add All"}
                    </button>
                )}
            </h2>

            {/* ✅ القوائم الفرعية */}
            {subMenuItems[selectedCategory] && (
                <div className="flex justify-center flex-wrap gap-3 mb-6">
                    {subMenuItems[selectedCategory].map((subCategory) => (
                        <div key={subCategory} className="flex flex-col items-center gap-2">
                            {/* زر اختيار القائمة الفرعية */}
                            <button
                                className={`px-4 py-2 rounded transition ${selectedSubCategory === subCategory ? "bg-green-800 text-white scale-110" : "bg-gray-300"}`}
                                onClick={() => {
                                    setSelectedSubCategory(prevSubCategory => prevSubCategory === subCategory ? null : subCategory);
                                }}
                            >
                                {subCategory}
                            </button>

                            {/* ✅ الزر يظهر فقط عندما تكون القائمة الفرعية داخل BEVERAGES ✅ */}
                            {selectedCategory === "BEVERAGES" && selectedSubCategory === subCategory && (
                                <button
                                    className="px-3 py-1 text-sm bg-green-700 text-white rounded-md transition hover:bg-green-900"
                                    onClick={() => handleAddAllBeveragesSubmenu(subCategory)}
                                >
                                    {selectedItems.some(item =>
                                        item.category === "BEVERAGES" && item.subCategory === subCategory
                                    ) ? "Remove All" : "Add All"}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* ✅ عرض العناصر */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredMenu.length > 0 ? (
                    filteredMenu.map((item) => (
                        <MenuCard
                            key={item.title}
                            {...item}
                            isSelected={selectedItems.some(selected => selected.title === item.title)}
                            onSelect={() => handleSelect(item)}
                            onImageClick={setFullScreenImage}
                        />
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-500">⚠️ لا توجد أصناف متاحة لهذه الفئة.</p>
                )}
            </div>

            {/* ✅ زر الانتقال إلى الدفع */}
            <Link
                to="/checkout"
                state={{
                    selectedCategory,
                    selectedSubCategory: selectedItems.some(item => item.category === "BEVERAGES")
                        ? selectedSubCategory
                        : null,
                    selectedManouche: selectedItems.some(item => item.category === "The Manouche")
                        ? "The Manouche"
                        : null,
                    selectedItems: selectedItems.filter(item =>
                        item.category !== "BEVERAGES" && item.category !== "The Manouche"
                    ) // إزالة العناصر الفعلية من BEVERAGES و The Manouche
                }}
            >
                <div className="flex justify-center mt-6">
    <button
        className={`px-6 py-3 rounded-md flex items-center gap-2 
            ${selectedItems.length > 0 || (selectedCategory === "BEVERAGES" && selectedSubCategory) || (selectedCategory === "The Manouche")
                ? "bg-green-900 text-white"
                : "bg-gray-400 cursor-not-allowed opacity-50"
        }`}
        disabled={selectedItems.length === 0 && !(selectedCategory === "BEVERAGES" && selectedSubCategory) && selectedCategory !== "The Manouche"}
    >
        INVOICE
    </button>
</div>

            </Link>
            {/* نافذة تكبير الصورة */}
            {fullScreenImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={() => setFullScreenImage(null)}>
                    <img src={fullScreenImage} alt="Full Screen" className="max-w-full max-h-full rounded-lg shadow-lg" />
                </div>
            )}
        </div>
    );
}



















