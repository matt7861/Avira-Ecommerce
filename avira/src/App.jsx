import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About/About";
import { Blogs } from "./pages/Blogs/Blogs";
import { Contact } from "./pages/Contact/Contact";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Shop } from "./pages/Shop/Shop";
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/shop/:id",
        element: <Shop />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
