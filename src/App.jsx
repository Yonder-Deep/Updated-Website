import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/About/About";
import Join from "./pages/Join/Join";
import Sponsors from "./components/Sponsors/Sponsors";
import AUV from "./pages/AUV/AUV";
import USV from "./pages/USV/USV";
import Home from "./pages/Home/Home";
import Sponsor from "./pages/Sponsors/Sponsor";
import TritonRoboSub from "./pages/Triton RoboSub/Triton RoboSub"

import Hero from "./components/Main Hero/Main Hero";
import Projects_Hero from "./components/Projects Hero/Projects Hero";
import Join_Hero from "./components/Join Hero/Join Hero";


function Projects() {
  return <Projects_Hero />;
  <Route
  path="/projects/auv"
  element={<AUV />}
/>
}

export default function App() {
  return (
    <div
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#061824",
    margin: 0,
    padding: 0,
    width: "100%"
  }}
>

      <Header />

      <main style={{ flex: 1, padding: 0, margin: 0 }}>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/join"
            element={<Join />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/auv"
            element={<AUV />}
          />

            <Route
            path="/projects/usv"
            element={<USV />}
          />

           <Route
            path="/projects/robosub"
            element={<TritonRoboSub />}
          />

          <Route
            path="/sponsor"
            element={<Sponsor />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}