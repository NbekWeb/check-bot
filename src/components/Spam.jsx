import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goBot = () => {
    navigate("/bot?category=spam");
  };

  // Sample data for bots
  const bots = new Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    name: `Bot №${index + 1}`,
    status: "SCAM",
  }));

  return (
    <div className="text-white">
      <div className="relative flex items-center h-10 px-2 rounded-xl bg-dark gap-1.5">
        <img src="/img/search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent border-none outline-none"
        />
      </div>
      <div className="my-2.5 text-xl ">
        <h3 className="text-3xl font-semibold">Blacklist </h3>
        <p className="mt-2 ">List of scam projects and scam bots.</p>
        <p> Check all new bots through search to protect yourself.  </p>
      </div>
      <div className="flex flex-col gap-2.5">
        {bots.map((bot) => (
          <div key={bot.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <img
                src="/img/check.png"
                className="flex w-15 h-15 rounded-xl border-[3px] border-red"
                alt="Bot Check"
              />
              <div className="text-base font-semibold flex gap-0.5 flex-col">
                <span>{bot.name}</span>
                <span className="text-red">{bot.status}</span>
              </div>
            </div>
            <button
              onClick={goBot}
              className="bg-blue-500 text-sm flex items-center rounded-2xl px-2.5 py-1 hover:bg-blue-500/80"
            >
              OPEN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
