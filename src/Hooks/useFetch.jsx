import { useState, useEffect } from "react";

const useFetch = (url, options = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies); 
  return { data, loading, error };
};

export default useFetch;
