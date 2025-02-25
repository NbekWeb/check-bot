import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const BotCard = ({
  title,
  description,
  label,
  imgSrc,
  onClick,
  show = false,
}) => (
  <div className="flex items-center gap-10 min-w-max">
    <div className="flex gap-3.5 items-center">
      <img
        src={imgSrc}
        alt={`${title} Image`}
        className="object-cover w-15 h-15 rounded-2xl"
      />
      <div className="flex flex-col justify-between">
        <span className="text-base font-semibold">{title}</span>

        {show && (
          <span className="text-xs font-medium text-yellow-500">{label}</span>
        )}
        <span className="text-base font-medium">{description}</span>
      </div>
    </div>
    <button
      onClick={onClick}
      className="bg-blue-500 text-sm flex items-center rounded-2xl px-2.5 py-1 hover:bg-blue-500/80"
    >
      OPEN
    </button>
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    console.log("sa");
  };

  const goCategory = () => {
    navigate("/all-category");
  };

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
  ];

  return (
    <div className="text-white">
      {/* Search Bar */}
      <div className="relative flex items-center h-10 px-2 rounded-xl bg-dark gap-1.5">
        <img src="/img/search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent border-none outline-none"
        />
      </div>

      {/* Categories */}
      <div className="mt-4 overflow-x-hidden">
        <div className="flex items-center gap-4 overflow-x-auto text-base font-semibold tr-scrollbar">
          {["All categories", "Trade", "Wallets"].map((category, index) => (
            <button
              onClick={() => goCategory()}
              key={index}
              className="px-4 py-2 bg-blue-500 rounded-lg min-w-max"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Image */}
      <div className="border-b-[0.5px] py-3.5">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="/img/check.png"
              alt="Featured"
              className="object-cover w-full h-40 rounded-3xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/img/check.png"
              alt="Featured"
              className="object-cover w-full h-40 rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/check.png"
              alt="Featured"
              className="object-cover w-full h-40 rounded-3xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Top Section */}
      <div className="pb-5 border-b-[0.5px]">
        <div className="flex justify-between mt-1">
          <h2 className="text-2xl font-semibold">Top of all time </h2>
          <Link
            to={{ pathname: "/see", search: "?category=all" }}
            className="text-sm underline underline-offset-1"
          >
            See all
          </Link>
        </div>
        <div className="mt-3.5 overflow-x-hidden text-sm flex flex-col gap-4">
          <div className="flex flex-col gap-4 overflow-x-auto tr-scrollbar">
            <div className="flex items-center gap-7 ">
              {botData.map((bot, i) => (
                <BotCard
                  show={i == 0 && true}
                  key={bot.id}
                  title={bot.title}
                  description={bot.description}
                  label={bot.label}
                  imgSrc={bot.imgSrc}
                  onClick={() => handleNavigate(bot.path)}
                />
              ))}
            </div>
            <div className="flex items-center gap-7 ">
              {botData.map((bot, i) => (
                <BotCard
                  show={i == 0  && true}
                  key={bot.id}
                  title={bot.title}
                  description={bot.description}
                  label={bot.label}
                  imgSrc={bot.imgSrc}
                  onClick={() => handleNavigate(bot.path)}
                />
              ))}
            </div>
            <div className="flex items-center gap-7 ">
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

      {/* New Section */}
      <div className="pb-5">
        <div className="flex items-center justify-between mt-1 ">
          <h2 className="text-2xl font-semibold">New</h2>
          <Link
            to={{ pathname: "/see", search: "?category=all" }}
            className="text-sm underline underline-offset-1"
          >
            See all
          </Link>
        </div>
        <div className="mt-3.5 overflow-x-hidden text-sm flex flex-col gap-4">
          <div className="flex flex-col gap-4 overflow-x-auto tr-scrollbar">
            <div className="flex items-center gap-7">
              {botData.map((bot,i) => (
                <BotCard
                show={i==0}
                  key={bot.id}
                  title={bot.title}
                  description={bot.description}
                  label={bot.label}
                  imgSrc={bot.imgSrc}
                  onClick={() => handleNavigate(bot.path)}
                />
              ))}
            </div>
            <div className="flex items-center gap-7 ">
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
            <div className="flex items-center gap-7 ">
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
  );
};

export default Home;
