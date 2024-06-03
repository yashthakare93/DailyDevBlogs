

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["All", "System Design", "React"];

    return (
        <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center  border-b-2 py-5 text-grey-500">
            <button onClick={()=> onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "":"active-button"}`}></button>
            {categories.map((category) => (
                <button
                    onClick={()=>onSelectCategory(category)}
                    key={category}
                    className={`mr-2 px-4 py-2 ${activeCategory === category ? "active-button" : ""}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategorySelection;
