import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AllCategory = () => {
  const data = [
    { name: "Топ за всё время", path: "" },
    { name: "Новые", path: "" },
    { name: "Торговые", path: "" },
    { name: "Кошельки", path: "" },
    { name: "Свап", path: "" },
    { name: "Новостные", path: "" },
    { name: "Анализаторы", path: "" },
    { name: "Подборки", path: "" },
    { name: "Черный список", path: "/spam" },
  ];

  const navigate = useNavigate();

  const goPage = (path) => {
    if (!!path) {
      navigate(path);
    }
  };

  return (
    <div className="text-white tr-scrollbar">
      <h2 className="text-3xl font-semibold">Все категории </h2>
      <div className="flex flex-col gap-5 mt-5 ">
        {data.map((item, i) => (
          <button
            onClick={() => goPage(item.path)}
            key={i}
            className="flex items-center justify-center w-full text-3xl rounded-2xl h-15 bg-dark-500"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
