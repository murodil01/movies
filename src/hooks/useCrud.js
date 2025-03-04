import { useState, useEffect } from "react";

const useCrud = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createData = async (newItem) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      const result = await response.json();
      setData((prevData) => [
        ...prevData,
        { ...result, id: prevData.length + 1 },
      ]);
    } catch (err) {
      setError(err);
    }
  };

  const updateData = async (id, updatedItem) => {
    try {
      await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...updatedItem } : item
        )
      );
    } catch (err) {
      setError(err);
    }
  };

  const deleteData = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: "DELETE" });
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  return { data, loading, error, createData, updateData, deleteData };
};

export default useCrud;
