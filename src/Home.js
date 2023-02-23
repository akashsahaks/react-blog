import { React, useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <>
      <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </>
  );
};

export default Home;
