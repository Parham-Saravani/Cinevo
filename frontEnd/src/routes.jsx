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
import ErrorPage from "./Pages/ErrorPage";
import PrivateRoute from "./Components/PrivateRoute";
import DashboardLayout from "./Components/Layouts/DashboardLayout";

import UserDashboard from "./Components/Dashboard/DashboardHome/UserDashboard";
import UserFavorites from "./Components/Dashboard/UserLayouts/UserFavorites";
import UserWatchList from "./Components/Dashboard/UserLayouts/UserWatchList";
import UserSetting from "./Components/Dashboard/UserLayouts/UserSetting";

import AdminDashboard from "./Components/Dashboard/DashboardHome/AdminDashboard";
import AdminSeries from "./Components/Dashboard/AdminLayouts/AdminSeries";
import AdminMovies from "./Components/Dashboard/AdminLayouts/AdminMovies";
import AdminSetting from "./Components/Dashboard/AdminLayouts/AdminSetting";
import AdminComments from "./Components/Dashboard/AdminLayouts/AdminComments";
import AdminUsers from "./Components/Dashboard/AdminLayouts/AdminUsers";

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
  {
    path: "/search",
    element: <Search />,
    handle: { from: "hide-header-searchBox" },
  },
  { path: "/error", element: <ErrorPage /> },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <UserDashboard /> },
          { path: "watchlist", element: <UserWatchList /> },
          { path: "favorites", element: <UserFavorites /> },
          { path: "settings", element: <UserSetting /> },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/admin",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "movies", element: <AdminMovies /> },
          { path: "series", element: <AdminSeries /> },
          { path: "users", element: <AdminUsers /> },
          { path: "comments", element: <AdminComments /> },
          { path: "settings", element: <AdminSetting /> },
        ],
      },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);

export default router;
