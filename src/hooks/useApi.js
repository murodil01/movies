/*import { useState, useEffect } from "react";

const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createData = async (newItem) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result = await response.json();
      setData((prevData) => [...prevData, result]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (id, updatedItem) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${endpoint}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result = await response.json();
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? result : item))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
    createData,
    updateData,
    deleteData,
  };
};

export default useApi;*/
