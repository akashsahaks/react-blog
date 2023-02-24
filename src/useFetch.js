import { useState, useEffect } from "react";

// this is a custom hooks

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    //  In real life sometimes fetching data takes time for sometimes, at that time our
    //  loading component show as much time takes server to respond data after responding loading
    //  compoennt gets unload, so here our api does not taking time to load data from server so just to
    //  demonstrate a loading component how its working that's why we use setTimeout for 1 sec delay

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((respose) => {
          // console.log(respose);
          if (!respose.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return respose.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // console.log(err.message);
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortController.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
