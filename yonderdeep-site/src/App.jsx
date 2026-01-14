import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}
function Projects() {
  return <h1>Projects</h1>;
}

export default function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: 12, padding: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
