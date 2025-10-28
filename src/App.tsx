import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:index" element={<MoviePage />} />
    </Routes>
  );
}