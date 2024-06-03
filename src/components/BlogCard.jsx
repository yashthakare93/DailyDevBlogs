import PropTypes from 'prop-types';

const BlogCard = ({ blogs, selectedCategory }) => {
    const filteredBlogs = blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory);

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 rounded-xl pb-10">
            {
                filteredBlogs.map((blog) => {
                    console.log(blog.image);
                    const blogPath = `/blog-website-react/src/BlogPost/${blog.id}.html`;
                    const imagePath = blog.image;

                    return (
                        <a key={blog.id} href={blogPath} target="_blank" rel="noopener noreferrer" className="shadow-lg rounded-xl hover:shadow-2xl cursor-pointer flex flex-col">
                            <img src={imagePath} alt={blog.title} className="rounded-t-xl h-64 object-contain object-center" />
                            <div className="bg-white p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold pb-1">{blog.title}</h3>
                                <div className="flex justify-between mt-auto">
                                    <p className="text-gray-500">{blog.published_date}</p>
                                    <p className="text-green-400 italic">Read {blog.reading_time}</p>
                                </div>
                            </div>
                        </a>
                    );
                })
            }
        </div>
    );
}

BlogCard.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            published_date: PropTypes.string.isRequired,
            reading_time: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedCategory: PropTypes.string,
};

export default BlogCard;
