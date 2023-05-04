import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./MainPage";

function App() {
  return (
    <div className="App">
      <Link to="1">1</Link>
      <Link to="2">2</Link>
      <Link to="3">3</Link>
      <Link to="4">4</Link>
      <Link to="5">5</Link>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
