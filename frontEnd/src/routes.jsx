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
import DashboardHome from "./Components/Dashboard/DashboardHome";
import DashbaordWatchlist from "./Components/Dashboard/DashbaordWatchlist";
import DashboardFavourit from "./Components/Dashboard/DashboardFavourit";
import ErrorPage from "./Pages/ErrorPage";

import DashboardLayout from "./Components/Layouts/DashboardLayout";
import DashboardSetting from "./Components/Dashboard/DashboardSetting";

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
  { path: "/error", element: <ErrorPage /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "watchlist", element: <DashbaordWatchlist /> },
      { path: "favorites", element: <DashboardFavourit /> },
      { path: "settings", element: <DashboardSetting /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);

export default router;
