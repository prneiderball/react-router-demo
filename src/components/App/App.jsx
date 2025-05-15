import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="mission" element={<SiteMission />} />
          <Route path="history" element={<SiteHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
