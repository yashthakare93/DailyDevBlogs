import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import BlogData from '../BlogData/BlogData.json';  

import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const[selectedCategory,setselectedCategory] = useState("All");

    useEffect(() => {
        setBlogs(BlogData);
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCategoryChange = (category) =>{
        setselectedCategory(category);
        setCurrentPage(1);
    }
    const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);


    const totalPages = Math.ceil(blogs.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + pageSize);

    return (
        <div>
            {/* category section */}
            <div><CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={selectedCategory}/></div>

            {/* blogcard section */}
            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCard blogs={currentBlogs} />

                {/* sidebar */}
                <div><SideBar/></div>
            </div>

            {/* pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border border-blue-500 rounded`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
