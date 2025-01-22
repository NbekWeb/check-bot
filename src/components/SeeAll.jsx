import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

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
    <button
      onClick={onClick}
      className="bg-blue-500 mr-5 text-sm flex items-center rounded-2xl px-2.5 py-1 hover:bg-blue-500/80"
    >
      OPEN
    </button>
  </div>
);

const AllCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category") || "all";

  const botData = [
    {
      id: 1,
      title: "Bot №1",
      description: "Description",
      label: "Editor's Choice",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 2,
      title: "Bot №2",
      description: "Description",
      label: "Editor's Choice",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 3,
      title: "Bot №3",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 4,
      title: "Bot №4",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 5,
      title: "Bot №5",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 6,
      title: "Bot №6",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 7,
      title: "Bot №7",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 8,
      title: "Bot №8",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 9,
      title: "Bot №9",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 10,
      title: "Bot №10",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
    {
      id: 11,
      title: "Bot №11",
      description: "Description",
      label: "",
      imgSrc: "/img/check.png",
      path: "/bot",
    },
  ];

  return (
    <div className="text-white tr-scrollbar">
      <h2 className="text-2xl font-semibold">
        {category == "all"
          ? "Top of all time"
          : category === "new"
          ? "New"
          : category === "trading"
          ? "Trading"
          : category === "wallets"
          ? "Wallets"
          : category === "copytrade"
          ? "Copytrade"
          : category === "scanners"
          ? "Scanners"
          : " For chat"}
      </h2>
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
