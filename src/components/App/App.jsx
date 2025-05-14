import { Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Reviews from '../Reviews/Reviews';
import Aboutme from '../Aboutme/Aboutme';
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
