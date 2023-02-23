import { React, useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //  In real life sometimes fetching data takes time for sometimes, at that time our
    //  loading component show as much time takes server to respond data after responding loading
    //  compoennt gets unload, so here our api does not taking time to load data from server so just to
    //  demonstrate a loading component how its working that's why we use setTimeout for 1 sec delay

    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((respose) => {
          // console.log(respose);
          if (!respose.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return respose.json();
        })
        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </>
  );
};

export default Home;
