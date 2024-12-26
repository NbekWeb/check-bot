import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const BotCard = ({ title, description, label, imgSrc, onClick }) => (
  <div className="flex items-center justify-between">
    <div className="flex gap-3.5 items-center">
      <img
        src={imgSrc}
        alt={`${title} Image`}
        className="object-cover w-15 h-15 rounded-2xl"
      />
      <div className="flex flex-col justify-between">
        <span className="text-base font-semibold">{title}</span>
        <span className="text-xs font-medium text-yellow-500">{label}</span>
        <span className="text-base font-medium">{description}</span>
      </div>
    </div>
    <button className="bg-blue-500 mr-5 text-sm flex items-center rounded-2xl px-2.5 py-1 hover:bg-blue-500/80">
      ОТКРЫТЬ
    </button>
  </div>
);

const AllCategory = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const botData = [
    {
      id: 1,
      title: "Бот №1",
      description: "Описание",
      label: "Выбор редакции",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 2,
      title: "Бот №2",
      description: "Описание",
      label: "Выбор редакции",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 3,
      title: "Бот №3",
      description: "Описание",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 4,
      title: "Бот №4",
      description: "Описание",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
        id: 5,
        title: "Бот №5",
        description: "Описание",
        label: "",
        imgSrc: "/img/check.png",
        path: "/bot",
      },
      {
        id: 6,
        title: "Бот №6",
        description: "Описание",
        label: "",
        imgSrc: "/img/check.png",
        path: "/bot",
      },
      {
        id: 7,
        title: "Бот №7",
        description: "Описание",
        label: "",
        imgSrc: "/img/check.png",
        path: "/bot",
      },
      {
        id: 8,
        title: "Бот №8",
        description: "Описание",
        label: "",
        imgSrc: "/img/check.png",
        path: "/bot",
      },
      {
        id: 9,
        title: "Бот №9",
        description: "Описание",
        label: "",
        imgSrc: "/img/check.png",
        path: "/bot",
      },
      {
        id: 10,
        title: "Бот №10",
        description: "Описание",
        label: "",
        imgSrc: "/img/check.png",
        path: "/bot",
      },
      {
        id: 11,
        title: "Бот №11",
        description: "Описание",
        label: "",
        imgSrc: "/img/check.png",
        path: "/bot",
      },
  ];

  return (
    <div className="text-white tr-scrollbar">
    
    <h2 className="text-2xl font-semibold">Топ за всё время  </h2>
      <div className="flex flex-col gap-4 mt-3">
        {botData.map((bot) => (
          <BotCard
            key={bot.id}
            title={bot.title}
            description={bot.description}
            label={bot.label}
            imgSrc={bot.imgSrc}
            onClick={() => handleNavigate(bot.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
