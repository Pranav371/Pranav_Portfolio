import React, { useEffect, useState } from 'react';
import "../styles/Blogs.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/1786077181722822431/posts?key=AIzaSyCw07Xbt-AGPIH5yfC_0FFKHbjVI6eQSBE`
        );
        const data = await response.json();
        setBlogs(data.items);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id='blogs'>
        <div className="blog-section">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 200) + '...' }}
          />
          {blog.images && blog.images.length > 0 && (
            <img src={blog.images[0].url} alt={blog.title} className="blog-image" />
          )}
          <a href={blog.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Blog;
