import React from "react";
import Video from "./Video";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Galeria from "./Galeria";
import NavBar from "../components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Video></Video>,
  },
  {
    path: "/galeria",
    element: <Galeria />,
  },
]);

export default function Container() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}
