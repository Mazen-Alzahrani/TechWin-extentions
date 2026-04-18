import { useState } from "react";
import useCards from "./hooks/useCards";

import sun from "./assets/images/icon-sun.svg";
import logo from "./assets/images/logo-dark-mod.svg";

function App() {
  const { cards, loading, error, createCard, deleteCard } = useCards(); //custom hook
  const [showModal, setShowModal] = useState(false); // modal state
  const [title, setTitle] = useState(""); // store title input value
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreate = async () => {
    await createCard({ title, description, image });

    setSuccessMessage("تم إنشاء البطاقة بنجاح");
    setTimeout(() => setSuccessMessage(""), 3000);

    setShowModal(false); // close modal

    setTitle(""); // reset form
    setDescription("");
    setImage(null);
  };

  if (loading) return <h1>Loading...</h1>; // loading state
  if (error) return <h1>{error}</h1>; // error state

  return (
    <>
      {successMessage && (
        <div className="bg-green-500 text-white p-3 mb-4 rounded">
          {successMessage}
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-[#040918] to-[#091540] text-white p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-[#1c243c] rounded-2xl lg:mx-20 p-3">
          <img src={logo} className="w-30 h-8" />
          <button className="w-8 h-8 border border-white/20 flex justify-center rounded-lg">
            <img src={sun} />
          </button>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 px-4 py-2 rounded mb-6"
        >
          Add Card
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed z-10 inset-0 bg-black/70 flex justify-center items-center">
            <div className="bg-white text-black p-6 rounded-lg w-96">
              <h2 className="mb-4 font-bold text-lg">Create Card</h2>
              {/* form inputs */}
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-3 p-2 border"
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mb-3 p-2 border"
              />
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full mb-4"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 px-3 py-1 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleCreate}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#1c243c] border border-white/10 rounded-xl p-5"
            >
              <div className="flex gap-4">
                <img src={card.icon} className="w-12 h-12" />
                <div>
                  <h2 className="font-bold">{card.title}</h2>
                  <p className="text-sm text-white/70">{card.description}</p>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => deleteCard(card.id)}
                  className="text-sm border border-white/20 p-2 rounded-full hover:ring-2 ring-red-500"
                >
                  Remove
                </button>

                <div className="relative w-11 h-6 rounded-full bg-red-500">
                  <span className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
