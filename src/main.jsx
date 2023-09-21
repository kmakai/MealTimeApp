import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./pages/Main.jsx";
import Search from "./pages/Search.jsx";
import { loader as searchLoader } from "./pages/Search.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        errorElement={<h1>Something went wrong: page to be implemented</h1>}
      >
        <Route index element={<Main />} />
        <Route path="search" element={<Search />} loader={searchLoader} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
