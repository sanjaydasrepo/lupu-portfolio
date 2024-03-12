import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 px-32">
        <div className="w-full py-16 flex w-full justify-between">
          <p>Logo</p>
          <p>Dark mode</p>
        </div>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AboutMe />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
