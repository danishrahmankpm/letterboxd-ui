import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>

  );
}