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
    <div className="flex flex-col justify-between flex-grow max-h-full min-h-full overflow-x-hidden overflow-y-hidden text-xl text-white">
      {step == 0 ? (
        <div>
          <h1 className="pr-32 text-6xl font-semibold ">Check Bot</h1>
          <p className="pr-2 mt-3 ">
            Платформа где собраны самые лучшие и полезные боты и миниаппы. Для
            облегчения поиска введена система рейтингов и топов самых
            актуальных, полезных и безопасных ботов. Также данный проект
            направлен на помощь разработчикам в реализации и продвижение своих
            ботов. На данной платформе каждый разработчик сможет выложить свой
            проект и продвигать по средствам общего рейтинга.
          </p>
        </div>
      ) : (
        <div className="mt-5 ">
          <p>На данной агрегате вы сможете подобрать бота:</p>
          <ul className="mt-5 list-disc list-inside">
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
          </ul>
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
          {step == 0 ? "Далее" : "Начать"}
        </button>
      </div>
    </div>
  );
};

export default Main;
