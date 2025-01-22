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
            <span className="flex mt-2">
              For buying and selling cryptocurrency For automated trading To
              collect and analyze all the latest news and insights on the market{" "}
              <br />
              For copy trading For sending funds and storage For chart analysis
              and technical analysis For P2P trading To obtain up-to-date data
              on rates and trading volumes
            </span>
          </div>
          <span className="flex mx-auto text-center">
            @ 2025 TopBotCheck <br /> by 3A Project
          </span>
          {/* <ul className="mt-5 list-disc list-inside">
            <li>Для покупки и продажи криптовалюты</li>
            <li>Для автоматизированной торговли </li>
            <li>
              Для сбора и анализа всех актуальных новостей и инсайдов на рынке
            </li>
            <li>Для снайпинга</li>
            <li>Для отправка средств и хранению</li>
            <li>Для анализа графиков и технический анализ</li>
            <li>Для Р2Р торговли</li>
            <li>Для получения актуальные данные о курсах и объемах торгов</li>
          </ul> */}
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
