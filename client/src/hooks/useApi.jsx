import { useState } from "react";
import API from "../services/api.js";

const useApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const call = async () => {
    setResponse(null);
    setError("");
    setIsLoading(true);

    try {
      let res = await API();
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
};

export default { call, response, error, isLoading };
