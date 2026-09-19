import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FloatingHearts from "./components/FloatingHearts";

import Home from "./pages/Home";
import Feelings from "./pages/Feelings";
import WhyILoveYou from "./pages/WhyILoveYou";
import Dreams from "./pages/Dreams";
import OurStory from "./pages/OurStory";
import Letter from "./pages/Letter";
import AnimatedCouples from "./pages/AnimatedCouples";
import Songs from "./pages/Songs";

function App() {
  return (
    <div className="app">
      <FloatingHearts />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lo-que-siento" element={<Feelings />} />
          <Route path="/por-que-me-enamore" element={<WhyILoveYou />} />
          <Route path="/lo-que-sueno" element={<Dreams />} />
          <Route path="/nuestra-historia" element={<OurStory />} />
          <Route path="/tu-y-yo" element={<AnimatedCouples />} />
          <Route path="/canciones" element={<Songs  />} />
          <Route path="/para-ti" element={<Letter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;