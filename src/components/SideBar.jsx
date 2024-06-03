import React, { useState, useEffect } from 'react';
import BlogData from 'C:\\Users\\DELL\\OneDrive\\Desktop\\Blog Website\\react-blog-website\\BlogData\\BlogData.json';
import { FaArrowRight } from 'react-icons/fa6'

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        setPopularBlogs(BlogData.slice(0, 10));
    }, []);

    return (
        <div>
            <div>
                <h3 className="text-2xl font-semibold py-2">Latest Blogs</h3>
                <ul>
                    {popularBlogs.map((blog, index) => {
                        const baseURL = "http://192.168.43.44:5500";
                        const blogPath = `${baseURL}/react-blog-website/BlogPost/${blog.id}.html`;
                        return (
                            <li key={index} className="mb-2">
                                <h4 className="" href={blogPath} target="_blank" rel="noopener noreferrer">
                                    {blog.title}
                                </h4>
                                <a href={blogPath} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-orange-500 items-center py-1 inline-flex">
                                    Read More<FaArrowRight className=" mt-1 ml-2" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
