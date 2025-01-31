import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from "./components/Main";
import Home from "./components/Home";
import Bot from "./components/Bot";
import SeeAll from "./components/SeeAll";
import Spam from "./components/Spam";
import AllCategory from "./components/AllCategory";

import { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    let tg = window.Telegram.WebApp;
    let init_data_route = "http://158.160.163.50:8080/api/v1/check/init-data";
    const initData = tg.initData;
    console.log(initData);
    fetch(init_data_route, {
      method: "POST",
      body: initData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error fetching init data:", error));
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
