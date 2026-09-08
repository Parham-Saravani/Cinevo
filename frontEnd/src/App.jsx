import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Genre from "./Pages/Genre";
import Search from "./Pages/Search";
import NotFound from "./Pages/NotFound";
import Movie from "./Pages/Movie";
import Serie from "./Pages/Serie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/search" element={<Search />} />
      <Route path="/movie/:slug" element={<Movie />} />
      <Route path="/serie/:slug" element={<Serie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
