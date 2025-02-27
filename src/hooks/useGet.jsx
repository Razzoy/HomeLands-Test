import { useEffect, useState } from "react";

export function useGet(url, token, param) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }

    setIsLoading(true);
    setError(null);

    const controller = new AbortController();
    const signal = controller.signal;

    const options = {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
        signal,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));

      return ()=> {controller.abort()};

  }, [url, param, token]);

  return { data, error, isLoading };
}