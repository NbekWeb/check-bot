import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const BotCard = ({ title, description, label, imgSrc, onClick }) => (
  <div className="flex items-center gap-10 min-w-max">
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
    <button className="bg-blue-500 text-sm flex items-center rounded-2xl px-2.5 py-1 hover:bg-blue-500/80">
      ОТКРЫТЬ
    </button>
  </div>
);

const Main = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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
  ];

  const hasSpamCategory =
    new URLSearchParams(location.search).get("category") === "spam";

  const goPage = () => {
    if (step == 0) {
      setStep(1);
    } else {
      navigate("/home");
    }
  };
  return (
    <div className="text-white">
      <div className="flex items-center gap-4  border-b-[0.5px] border-white pb-3">
        <img
          src="/img/check.png"
          className={`object-cover h-26 w-26 rounded-2xl ${hasSpamCategory&&'border-4 border-red'}`}
        />
        <div className="flex flex-col justify-between flex-grow">
          <span className="text-2xl font-semibold">Бот №1</span>
          {hasSpamCategory ? (
            <span className="text-sm text-red">SCAM</span>
          ) : (
            <span className="text-sm text-yellow-500">Выбор редакции</span>
          )}
          <span className="text-base font-medium">Мини описание</span>
          <div className="flex items-center justify-between ">
            <button className="bg-blue-500 text-sm flex items-center rounded-2xl px-2.5 py-1 hover:bg-blue-500/80">
              ПЕРЕЙТИ
            </button>
            <img src="/img/share.png" className="w-7" />
          </div>
        </div>
      </div>
      <div className="mt-2.5">
        <div className="flex items-center gap-3.5">
          <img src="/img/like.png" className="w-11" />
          <img src="/img/dislike.png" className="rotate-180 w-11" />
          <button className="flex items-center h-10 px-4 text-2xl font-semibold bg-blue-500 rounded-xl">
            11/11
          </button>
          <button className="flex flex-col items-center justify-center h-10 gap-0 px-5 text-xs font-semibold bg-blue-500 rounded-xl">
            <span className="">РЕЙТИНГ</span> №1
          </button>
        </div>
        <div className="mt-4 overflow-x-hidden">
          <div className="flex gap-4 overflow-x-auto tr-scrollbar">
            <img
              src="/img/check.png"
              className="w-[190px] h-[340px] object-cover rounded-2xl"
            />
            <img
              src="/img/check.png"
              className="w-[190px] h-[340px] object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-2">
          <span className="flex mb-2 text-xl font-semibold">Описание</span>
          <div className="flex flex-col w-full gap-4 px-5 pt-2 pb-10 text-base font-semibold rounded-xl bg-dark-500">
            <span>Полное описание:</span>
            <span>Что нового:</span>
          </div>
          <div className="flex justify-between mt-4 pb-3.5 border-b-[0.5px] border-white">
            <button className="flex items-center px-4 py-1 text-base bg-blue-500 rounded-xl hover:bg-blue-500/80">
              Гайд
            </button>
            <button className="flex items-center px-4 py-1 text-base bg-blue-500 rounded-xl hover:bg-blue-500/80">
              Разработчик
            </button>
            <button className="flex items-center px-4 py-1 text-base bg-blue-500 rounded-xl hover:bg-blue-500/80">
              Соц Сети
            </button>
          </div>
        </div>
        <div className="pb-5 ">
          <div className="flex justify-between mt-1">
            <h2 className="text-2xl font-semibold">Смотрите также</h2>
            <Link
              to="/see-all"
              className="text-sm underline underline-offset-1"
            >
              Смотреть все
            </Link>
          </div>
          <div className="mt-3.5 overflow-x-hidden text-sm flex flex-col gap-4">
            <div className="overflow-x-auto">
              <div className="flex items-center gap-7 tr-scrollbar">
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
              <div className="flex items-center gap-7 tr-scrollbar">
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
              <div className="flex items-center gap-7 tr-scrollbar">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
