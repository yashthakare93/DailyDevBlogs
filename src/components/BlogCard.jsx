

const BlogCard = ({ blogs,selectedCategory }) => {
    const filteredBlogs = blogs.filter((blogs)=> !selectedCategory || blogs.category === selectedCategory);
    
   
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 rounded-xl pb-10">
      {
        filteredBlogs.map((blog) => {
          const baseURL = "http://192.168.43.44:5500";
          const blogPath = `${baseURL}/react-blog-website/BlogPost/${blog.id}.html`;


          return (
            <a key={blog.id} href={blogPath} target="_blank" rel="noopener noreferrer" className="shadow-lg rounded-xl hover:shadow-2xl cursor-pointer flex flex-col">
            <img src={blog.image} alt="" className="rounded-t-xl h-64 object-contain object-center" />
            <div className="bg-white  p-5 flex flex-col flex-grow">
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

export default BlogCard
