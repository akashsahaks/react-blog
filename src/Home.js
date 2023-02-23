import { React, useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    //  In real life sometimes fetching data takes time for sometimes, at that time our
    //  loading component show as much time takes server to respond data after responding loading
    //  compoennt gets unload, so here our api does not taking time to load data from server so just to
    //  demonstrate a loading component how its working that's why we use setTimeout for 1 sec delay

    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((respose) => {
          return respose.json();
        })
        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <>
      <div className="home">
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </>
  );
};

export default Home;
