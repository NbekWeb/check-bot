import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from "./components/Main";
import Home from "./components/Home";
import Bot from "./components/Bot";
import SeeAll from "./components/SeeAll";
import Spam from "./components/Spam";
import AllCategory from "./components/AllCategory";

import { useEffect, useState } from "react";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      let tg = window.Telegram.WebApp;
      let initData = new URLSearchParams(tg.initData);

      console.log("Telegram initData:", tg.initData);

      // Extract token (hash) from initData
      const tokenFromTelegram = initData.get("hash");
      if (tokenFromTelegram) {
        setToken(tokenFromTelegram);
        localStorage.setItem("token", tokenFromTelegram);
      }
    }
  }, []);
  return (
    <div className="min-h-[100dvh]  bg-main px-3.5 py-5 flex flex-col">
      <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/see"  element={<SeeAll />} />
          <Route path="/all-category" element={<AllCategory />} />
          <Route path="/spam" element={<Spam />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
