import { useState, useEffect } from "react";
import axios from "axios";
import { getBaseUrl } from "../utils";

const useAxios = ({ url, method, body = null, headers = null, path = "/" }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const apiUrl = url ? url : `${getBaseUrl()}${path}`;

  const fetchData = () => {
    axios[method](apiUrl, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
