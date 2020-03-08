import { useEffect, useState } from 'react';
import Axios from 'axios';

const useAxios = (path, payload, method = 'GET') => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await Axios({ method, url: path, data: payload });
        if (!signal.aborted) {
          setResponse(res.data);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err.response.data);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { response, error, isLoading };
};

export default useAxios;
