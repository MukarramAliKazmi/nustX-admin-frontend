import axios from "axios"; // Import AxiosError from axios
import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use a cancel token to prevent memory leaks
    const source = axios.CancelToken.source();

    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const res = await axios.get(url, { cancelToken: source.token });
        setData(res.data);
      } catch (err: any) {
        // Use the AxiosError interface to annotate the err parameter
        // Check if the error is due to cancellation
        if (axios.isCancel(err)) {
          console.log("Request canceled");
        } else {
          setError(err);
        }
      }
    };

    // Call the function
    fetchData();

    // Return a cleanup function to cancel the request
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, error };
};

export default useFetch;
