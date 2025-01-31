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
    const tg = window.Telegram.WebApp; // Get the Telegram WebApp object
    const initData = tg.initData; // Get init data

    const initDataRoute = ""; // Set your backend URL (e.g., ngrok or local API)

    // Send initData to the backend
    fetch(initDataRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData }), // Send initData as JSON
    })
      .then((response) => response.json())
      .then((json) => console.log("Response from server:", json))
      .catch((error) => console.error("Error:", error));

    console.log("salo");
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
