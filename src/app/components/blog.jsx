"use client";
import Image from "next/image";
import blog1 from "../asset/img/blog1.jpg";
import blog2 from "../asset/img/blog2.jpg";
import blog3 from "../asset/img/blog3.jpg";
import { useState } from "react";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "2024 Campaign Schedule (With Download)",
      date: "November 12, 2023",
      description:
        "Here at Rework'd, we don't campaign for Black Friday. Instead, we're introducing new programs to help you campaign all year-round...",
      image: blog1,
      link: "/blog/campaign-schedule",
    },
    {
      id: 2,
      title: "What's Happening at Rework'd 2024",
      date: "November 12, 2023",
      description:
        "We're excited to announce some new changes and exclusive services that are designed to take your marketing and branding strategies to the next level...",
      image: blog2,
      link: "/blog/happening-2024",
    },
    {
      id: 3,
      title: "How Mega-Brands 10x Their Sales for Holiday Shopping",
      date: "September 02, 2023",
      description:
        "What's the Secret to Mega-Brands' Holiday Success? When it comes to holiday shopping, some brands seem to have a magical touch...",
      image: blog3, 
      link: "/blog/holiday-shopping",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 1;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="blog" className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Blog
        </h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>

        {/* Blog Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-red-800 font-semibold hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border border-gray-300 ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            &#9664;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === index + 1
                  ? "bg-red-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border border-gray-300 ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
}