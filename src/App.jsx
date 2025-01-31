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
    // Ensure Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      const initData = tg.initData;
      console.log("Telegram initData:", initData);

      const initDataRoute = "http://localhost:5000/auth"; // Change to your backend route

      // Send initData to backend
      // fetch(initDataRoute, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ initData }),
      // })
      //   .then((response) => response.json())
      //   .then((json) => console.log("Response from server:", json))
      //   .catch((error) => console.error("Error:", error));
    } else {
      console.error(
        "Telegram WebApp is not available. Make sure this is running inside Telegram Mini App."
      );
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
          <Route path="/see" element={<SeeAll />} />
          <Route path="/all-category" element={<AllCategory />} />
          <Route path="/spam" element={<Spam />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
