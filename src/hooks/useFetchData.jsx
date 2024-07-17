import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();

        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        setData(fetchedData);
      } catch (error) {
        setError({ message: error.message });
      } finally {
        setIsloading(false);
      }
    }
    fetchData();
  }, []);

  return { data, isLoading, error };
}
