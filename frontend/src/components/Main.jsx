import React, { useState } from "react";
import { Frown, Meh, Smile } from "lucide-react";

const Main = () => {
  const [rating, setRating] = useState(null);

  const ratings = [
    { id: 1, icon: <Frown size={200} />, label: "Galas" },
    { id: 2, icon: <Meh size={200} />, label: "Sakto lang" },
    { id: 3, icon: <Smile size={200} />, label: "Mayat" },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-neutral-primary">
      <h2 className="text-2xl font-semibold text-heading">Rate nak</h2>

      <div className="flex space-x-8">
        {ratings.map((r) => (
          <button
            key={r.id}
            onClick={() => setRating(r.id)}
            className={`flex flex-col items-center transition-transform duration-200 ${
              rating === r.id ? "scale-125" : "scale-100"
            }`}
          >
            <div className={`${rating === r.id ? "text-yellow-400" : "text-gray-400"}`}>
              {r.icon}
            </div>
            <span className="mt-2 text-sm text-heading">{r.label}</span>
          </button>
        ))}
      </div>

      {rating && (
        <p className="text-heading mt-4">
          You rated: <strong>{ratings.find((r) => r.id === rating).label}</strong>
        </p>
      )}
    </section>
  );
};

export default Main;
