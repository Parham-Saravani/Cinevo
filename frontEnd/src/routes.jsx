import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Genre from "./Pages/Genre";
import Search from "./Pages/Search";
import NotFound from "./Pages/NotFound";
import Movie from "./Pages/Movie";
import Serie from "./Pages/Serie";
import DashboardHome from "./Pages/DashboardHome";
import DashbaordWatchlist from "./Pages/DashbaordWatchlist";
import DashboardFavourit from "./Pages/DashboardFavourit";

import DashboardLayout from "./Components/Layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  { path: "/auth", element: <Auth /> },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/serie/:slug",
    element: <Serie />,
  },
  {
    path: "/movie/:slug",
    element: <Movie />,
  },
  { path: "/genre", element: <Genre /> },
  { path: "/search", element: <Search /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "watchlist", element: <DashbaordWatchlist /> },
      { path: "favourit", element: <DashboardFavourit /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);

export default router;
