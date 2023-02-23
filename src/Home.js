import { React, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);
  return (
    <>
      <div className="home">
        <BlogList blogs={blogs} title="All Blogs" />
      </div>
    </>
  );
};

export default Home;
