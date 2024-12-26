import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AllCategory = () => {
  const data = [
    "Топ за всё время",
    "Новые",
    "Торговые",
    "Кошельки",
    "Свап",
    "Новостные",
    "Анализаторы",
    "Подборки",
    "Черный список",
  ];

  return (
    <div className="text-white tr-scrollbar">
      <h2 className="text-3xl font-semibold">Все категории </h2>
      <div className="flex flex-col gap-5 mt-5 ">
        {data.map((item, i) => (
          <button
            key={i}
            className="flex items-center justify-center w-full text-3xl rounded-2xl h-15 bg-dark-500"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
