import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://base-tamimha.techwin.sa/api/",
});

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET Cards
  const getCards = async () => {
    try {
      const response = await api.get("/cards");
      setCards(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCards();
  }, []);

  // Create Card
  const createCard = async ({ title, description, image }) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("icon", image);

      await api.post("/cards/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      await getCards(); // refresh
    } catch (error) {
      console.error("Create Error:", error);
    }
  };

  // Delete Card
  const deleteCard = async (id) => {
    try {
      await api.delete(`/cards/delete/${id}`);

      // تحديث مباشر بدون GET
      setCards((prev) => prev.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };
  // Return all states and functions
  return {
    cards,
    loading,
    error,
    createCard,
    deleteCard,
  };
}
