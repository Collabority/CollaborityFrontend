import React from "react";

const LatestBlogSection = () => {
  const blogs = [
    {
      title: "Exploring the Future of Web Development",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      date: "March 1, 2025",
      description:
        "A deep dive into the upcoming trends in web development and the technologies driving change.",
    },
    {
      title: "Tailwind CSS: The Ultimate Guide",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      date: "February 15, 2025",
      description:
        "Learn how to master Tailwind CSS and build responsive, modern web designs with ease.",
    },
    {
      title: "React 18 Features You Need to Know",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      date: "January 25, 2025",
      description:
        "What’s new in React 18? We explore the latest features and updates in the React ecosystem.",
    },
  ];

  return (
    <section className="relative bg-cream py-20 my-36 rounded-4xl ">
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
      <div className="text-center">
        <h3 className=" text-red sm:text-lg md:text-4xl font-normal tracking-widest">
          Articles
        </h3>
        <h3 className="text-blue text-3xl sm:text-6xl font-bold">Our Latest Posts</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-0 sm:mx-3 py-16 cursor-pointer">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className=" bg-white shadow-lg rounded-4xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image with overlay on hover */}
           <div className="relative">
             <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-4xl"
            />
             <div className="absolute inset-0 bg-cream/10 bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 rounded-4xl flex items-center justify-center opacity-0 hover:opacity-100 backdrop-blur-xl">
              <button className="font-body text-white text-lg font-bold px-6 py-3 bg-teal-700 rounded-full hover:bg-teal transition-all duration-300 cursor-pointer">
                Read More
              </button>
            </div>
           </div>
            {/* Glass Effect Overlay */}
           
            {/* Blog Content */}
            <div className="p-6">
              <p className="text-sm text-teal ">{blog.date}</p>
              <h3 className="text-xl font-semibold text-blue mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-4 text-base">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default LatestBlogSection;
