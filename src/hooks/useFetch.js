import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error("could not fetch data");
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
          setError(null);
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [url, data]);

  return { data, isLoading, isError };
};

export default useFetch;
