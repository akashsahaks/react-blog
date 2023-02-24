import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDeleteBlog = (event) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted");
      navigate("/");
    });
  };

  return (
    <>
      <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div> {error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author} </p>
            <div>{blog.body}</div>
            <button onClick={handleDeleteBlog}>Delete</button>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
