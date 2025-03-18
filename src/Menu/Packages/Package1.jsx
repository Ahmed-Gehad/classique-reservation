import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

// بيانات المنيو مع الصور
const menuItems = [
    { title: "Bread Selections", category: "Bread", content: "A Wide Selection of Homemade Traditional French and Italian Breads Traditional French Baguette, Whole Wheat Baguette, Ciabatta, Oat Loafs, Brown Bread, Grissini Breadsticks, Cheese Grissini Rolls & Focaccia.", image: "/images/garlic-bread.jpg" },


    // International:
    { title: "Italian Mantovana Salad (Seasonal)", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Piemontaise Salad", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Lenticchie Tuna Salad", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Greek Salad", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Potato withMayo", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Coleslaw Salad", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "White Bean with Tuna", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Nicoise Salad", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Mushroom Salad", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Chicken Caesar", category: "Salads", subCategory: "International", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    // Oriental:
    { title: "Muhammara with Walnuts", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Lebanese Labneh", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Tahina", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Thomeya", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Raheb “Eggplants”", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Baba Ganoush", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Yogurt", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Cucumbers", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Fatoush", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Oriental Salad", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },
    { title: "Hummus", category: "Salads", subCategory: "Oriental", content: "Classic Caesar salad", image: "/images/caesar-salad.jpg" },


    { title: "Spinach, Zaatar & Mozzarella Manouche", category: "The Manouche", content: "Spinach, Zaatar & Mozzarella Manouche", image: "/images/zaatar-manouche.jpg" },
    { title: "Cream Cheese & Spinach Manouche", category: "The Manouche", content: "Cream Cheese & Spinach Manouche", image: "/images/zaatar-manouche.jpg" },
    { title: "Fresh Olive & Sesame Manouche", category: "The Manouche", content: "Fresh Olive & Sesame Manouche", image: "/images/zaatar-manouche.jpg" },
    { title: "Lebanese Crispy Fried Pita Bread", category: "The Manouche", content: "Lebanese Crispy Fried Pita Bread", image: "/images/zaatar-manouche.jpg" },
    { title: "Caprese infused Bruschetta", category: "The Manouche", content: "Caprese infused Bruschetta", image: "/images/zaatar-manouche.jpg" },
    { title: "Caramelized Onion Bruschetta", category: "The Manouche", content: "Caramelized Onion Bruschetta", image: "/images/zaatar-manouche.jpg" },
    { title: "Tomato & Pesto Bruschetta", category: "The Manouche", content: "Tomato & Pesto Bruschetta", image: "/images/zaatar-manouche.jpg" },
    { title: "Traditional Focaccia", category: "The Manouche", content: "Traditional Focaccia", image: "/images/zaatar-manouche.jpg" },
    { title: "Mushroom & Olive Focaccia", category: "The Manouche", content: "Mushroom & Olive Focaccia", image: "/images/zaatar-manouche.jpg" },



    { title: "Vine Leaves", category: "Starters", content: "Creamy chickpea dip", image: "/images/hummus.jpg" },
    { title: "Beef & Cheese Sambusak", category: "Starters", content: "Creamy chickpea dip", image: "/images/hummus.jpg" },
    { title: "Spicy Potato with Corianders", category: "Starters", content: "Creamy chickpea dip", image: "/images/hummus.jpg" },
    { title: "Vegetable Spring Rollsus", category: "Starters", content: "Creamy chickpea dip", image: "/images/hummus.jpg" },
    { title: "Sausage with Pomegranate Sauce", category: "Starters", content: "Creamy chickpea dip", image: "/images/hummus.jpg" },
    { title: "Beef Kobeiba", category: "Starters", content: "Creamy chickpea dip", image: "/images/hummus.jpg" },
    { title: "Italian Arancini", category: "Starters", content: "Creamy chickpea dip", image: "/images/hummus.jpg" },


    { title: "Beef Lasagna", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Chicken Negresco", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Eggplant Gratin", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Oriental Okra", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Couscous with Vegetables", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Rosemary Potato & Cheddar", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Potato Gratin with Cream", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "White or Basmati Rice", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Vegetable Ratatouille", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Sautéed Vegetables", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },
    { title: "Zucchini Béchamel", category: "Sides", content: "Crispy and golden ", image: "/images/french-fries.jpg" },



    { title: "Beef Kofta", category: "BBQ Grill", content: "Juicy grilled ", image: "/images/grilled-kebab.jpg" },
    { title: "Chicken Kababs (Specialty)", category: "BBQ Grill", content: "Juicy grilled ", image: "/images/grilled-kebab.jpg" },
    { title: "Shish Tawouk", category: "BBQ Grill", content: "Juicy grilled ", image: "/images/grilled-kebab.jpg" },
    { title: "Grilled Beef Sausage", category: "BBQ Grill", content: "Juicy grilled ", image: "/images/grilled-kebab.jpg" },
    { title: "Lebases Beef Arayes", category: "BBQ Grill", content: "Juicy grilled ", image: "/images/grilled-kebab.jpg" },

    // Beef & Veal:
    { title: "Beef Emince with Mushroom Sauce", category: "Main Courses", subCategory: "Beef & Veal", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Beef Emince au Poivre", category: "Main Courses", subCategory: "Beef & Veal", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Beef Emince with Teriyaki Sauce", category: "Main Courses", subCategory: "Beef & Veal", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Beef with Mustard Sauce", category: "Main Courses", subCategory: "Beef & Veal", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Stroganoff (Specialty)", category: "Main Courses", subCategory: "Beef & Veal", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Veal Picatta with Mushroom Sauce", category: "Main Courses", subCategory: "Beef & Veal", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Veal Picatta with Mustard", category: "Main Courses", subCategory: "Beef & Veal", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    // Poultry:
    { title: "Chicken Lemon Sauce", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Rosemary Chicken", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Cashew Chicken", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Ginger Chicken", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Chicken Basquaise", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Shish Tawouk", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Poulet a L’Estragon", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Chicken with Curry", category: "Main Courses", subCategory: "Poultry", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    // Fish:
    { title: "Fillet with Sauce Provencale", category: "Main Courses", subCategory: "Fish", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Fried Fillet with Meunière Sauce", category: "Main Courses", subCategory: "Fish", content: "Tender beef steak", image: "/images/beef-steak.jpg" },
    { title: "Filet de Poisson Sauce Dugléré", category: "Main Courses", subCategory: "Fish", content: "Tender beef steak", image: "/images/beef-steak.jpg" },


    // Gateaux Soiree
    { title: "Black Forest", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Pistachio Mousse", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Apricot & Pineapple Fruit Tart", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Chocolate Samba", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Chocolate Eclairs", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Vanilla Eclairs", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Sugar Mille Feuille", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Caramel Mille Feuille", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Apricot Jam Mille Feuille", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Chocolate Mille Feuille", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Chocolate Mousse", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Vanilla Mousse", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Caramel Mousse", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Fresh Mango Tarts", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Fresh Strawberry Tarts", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Mousse Coffee with Nougat", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Savarin Baba with Fresh Cream", category: "Desserts", subCategory: "Gateaux Soiree", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },

    // Bowls & Chafing Dishes
    { title: "Belgian Chocolate Profiterole", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Fruits & Fresh Cream Trifle", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Fresh Mango Tres Leches", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Fresh Strawberry Tres Leches", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Lotus Crumble Tres Leches", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Mango Misu with Mascarpone & Fresh Cream", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Traditional Tiramisu with Classique’s Signature Coffee", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Om Ali with Nuts (Specialty)", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },
    { title: "Mango or Strawberry Kunafa with Fresh Cream", category: "Desserts", subCategory: "Bowls & Chafing Dishes", content: "Rich chocolate cake", image: "/images/chocolate-cake.jpg" },


    // Fresh Juice & Cold Drinks Package
    { title: "Mango", category: "BEVERAGES", subCategory: "Fresh Juice & Cold Drinks Package", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Strawberry", category: "BEVERAGES", subCategory: "Fresh Juice & Cold Drinks Package", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Orange", category: "BEVERAGES", subCategory: "Fresh Juice & Cold Drinks Package", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Guava", category: "BEVERAGES", subCategory: "Fresh Juice & Cold Drinks Package", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },{ title: "Ongoing Mineral Water", category: "BEVERAGES", subCategory: "Fresh Juice & Cold Drinks Package", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Soft Drinks with Sugar Free options", category: "BEVERAGES", subCategory: "Fresh Juice & Cold Drinks Package", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },

    // Hot Drinks, Cold Drinks & Fresh Juice
    { title: "Turkish Coffee with or without Cardamom", category: "BEVERAGES", subCategory: "Hot Drinks, Cold Drinks & Fresh Juice", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "English Breakfast, Green Tea & Nescafe", category: "BEVERAGES", subCategory: "Hot Drinks, Cold Drinks & Fresh Juice", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Fresh Juice", category: "BEVERAGES", subCategory: "Hot Drinks, Cold Drinks & Fresh Juice", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Soft Drinks", category: "BEVERAGES", subCategory: "Hot Drinks, Cold Drinks & Fresh Juice", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },

    //MOCKTAILS
    { title: "Lychee Sour", category: "BEVERAGES", subCategory: "MOCKTAILS PACKAGE", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Traditional Pina Colada", category: "BEVERAGES", subCategory: "MOCKTAILS PACKAGE", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Strawberry Mojito", category: "BEVERAGES", subCategory: "MOCKTAILS PACKAGE", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Passion Fruit Mojito", category: "BEVERAGES", subCategory: "MOCKTAILS PACKAGE", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Peach Mojito", category: "BEVERAGES", subCategory: "MOCKTAILS PACKAGE", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    { title: "Pineapple Mojito", category: "BEVERAGES", subCategory: "MOCKTAILS PACKAGE", content: "Freshly squeezed juice", image: "/images/fresh-juice.jpg" },
    // Serveis Only
    { title: "Serveis Only", category: "BEVERAGES", subCategory: "Serveis Only", content: "40 EGP per Person", image: "/images/fresh-juice.jpg" },

];

const categories = [
    "Bread", "Salads", "The Manouche", "Starters",
    "Sides", "BBQ Grill", "Main Courses", "Desserts", "BEVERAGES"
];

const categoryTitles = {
    "Bread": "Enjoy Our Freshly Baked Bread",
    "Salads": "(a choice of 6)",
    "The Manouche": "(Addition of 45 EGP per person for all items)",
    "Starters": "(a choice of 3)",
    "Sides": "(a choice of 4)",
    "BBQ Grill": "For Outdoor Events only, with a fixed cost of 3,950 EGP Choose Two ",
    "Main Courses": "(a choice of 3)",
    "Gateaux Soiree": "(a choice of 4)"
};

// الفئات التي تحتوي على قائمة فرعية
const categoriesWithSubmenu = ["Salads", "Main Courses", "Desserts", "BEVERAGES"];

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
            {/* الصورة القابلة للتكبير */}
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
    const [selectedCategory, setSelectedCategory] = useState("Salads");
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [fullScreenImage, setFullScreenImage] = useState(null); // حالة الصورة المكبرة

    // تصفية القائمة بناءً على الفئة والفئة الفرعية
    const filteredMenu = menuItems.filter(item =>
        item.category === selectedCategory &&
        (!selectedSubCategory || item.subCategory === selectedSubCategory)
    );

    // تحديد العناصر المختارة
    const handleSelect = (item) => {
        setSelectedItems((prevSelected) =>
            prevSelected.some(selected => selected.title === item.title)
                ? prevSelected.filter(selected => selected.title !== item.title)
                : [...prevSelected, item]
        );
    };

    return (
        <div className="p-10">
            {/* أزرار الفئات الرئيسية */}
            <div className="flex justify-center flex-wrap gap-3 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded transition ${selectedCategory === category ? "bg-green-800 text-white scale-110" : "bg-gray-300"}`}
                        onClick={() => {
                            setSelectedCategory(category);
                            setSelectedSubCategory(null);
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* أزرار القوائم الفرعية */}
            {subMenuItems[selectedCategory] && (
                <div className="flex justify-center flex-wrap gap-3 mb-6">
                    {subMenuItems[selectedCategory].map((subCategory) => (
                        <button
                            key={subCategory}
                            className={`px-4 py-2 rounded transition ${selectedSubCategory === subCategory ? "bg-green-800 text-white scale-110" : "bg-gray-300"}`}
                            onClick={() => setSelectedSubCategory(subCategory)}
                        >
                            {subCategory}
                        </button>
                    ))}
                </div>
            )}

            {/* عنوان الفئة المختارة */}
            <h2 className="text-xl font-bold text-center mb-4 text-green-800">
                {categoryTitles[selectedCategory]}
            </h2>

            {/* عرض العناصر */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredMenu.length > 0 ? (
                    filteredMenu.map((item) => (
                        <MenuCard
                            key={item.title}
                            title={item.title}
                            content={item.content}
                            image={item.image}
                            isSelected={selectedItems.some(selected => selected.title === item.title)}
                            onSelect={() => handleSelect(item)}
                            onImageClick={setFullScreenImage} // تحديث الصورة عند النقر عليها
                        />
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-500">لا توجد أصناف متاحة لهذه الفئة.</p>
                )}
            </div>

            {/* زر الدفع */}
            <div className="flex justify-center mt-8">
                <Link to="/checkout" state={{ selectedItems }}>
                    <button
                        className={`px-6 py-3 rounded-md flex items-center gap-2 ${selectedItems.length > 0 ? "bg-green-900 text-white" : "bg-gray-400 cursor-not-allowed opacity-50"}`}
                        disabled={selectedItems.length === 0}
                    >
                        🛒 الانتقال إلى الدفع
                    </button>
                </Link>
            </div>

            {/* نافذة تكبير الصورة */}
            {fullScreenImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={() => setFullScreenImage(null)}>
                    <img src={fullScreenImage} alt="Full Screen" className="max-w-full max-h-full rounded-lg shadow-lg" />
                </div>
            )}
        </div>
    );
}





