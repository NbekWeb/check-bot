import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const goPage = () => {
    if (step == 0) {
      setStep(1);
    } else {
      navigate("/home");
    }
  };
  return (
    <div className="flex flex-col justify-between flex-grow max-h-full min-h-full overflow-x-hidden overflow-y-hidden text-xl text-white ">
      {step == 0 ? (
        <div>
          <h1 className="pr-32 text-6xl font-semibold ">Top Bot Check</h1>
          <p className="pr-2 mt-3 ">
            A platform where the best and most useful bots and mini-apps are
            collected. To make searching easier, a system of ratings and tops of
            the most relevant, useful and safe bots has been introduced. This
            project is also aimed at helping developers implement and promote
            their bots. On this platform, every developer will be able to post
            their project and promote it through the overall rating.
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-between flex-grow h-full mt-8 text-xl ">
          <div>
            <p className="text-2xl font-medium">
              On this unit you can select a bot:
            </p>
            <ul className="mt-5 list-disc list-inside">
              <li>For buying and selling cryptocurrency </li>
              <li>For automated trading</li>
              <li>
                To collect and analyze all the latest news and insights on the
                market
              </li>
              <li> For copy trading </li>
              <li>For sending funds and storage </li>
              <li>For chart analysis and technical analysis</li>
              <li>For P2P trading</li>
              <li> To obtain up-to-date data on rates and trading volumes</li>
            </ul>
          </div>
          <span className="flex mx-auto text-center">
            @ 2025 TopBotCheck <br /> by 3A Project
          </span>
        </div>
      )}
      <div className="flex flex-col justify-end flex-grow gap-5">
        <div className="flex items-center justify-center gap-2 mt-3">
          <span
            className={`min-w-2.5 w-2.5 border border-white h-2.5 rounded-full ${
              step === 0 ? "bg-white" : "bg-transparent"
            } flex`}
          ></span>
          <span
            className={`min-w-2.5 w-2.5 border border-white h-2.5 rounded-full ${
              step !== 0 ? "bg-white" : "bg-transparent"
            } flex`}
          ></span>
        </div>
        <button
          onClick={() => goPage()}
          className="w-full py-5 text-4xl font-semibold bg-blue-500 hover:bg-blue-500/80 rounded-3xl"
        >
          {step == 0 ? "Next" : "Begin"}
        </button>
      </div>
    </div>
  );
};

export default Main;
