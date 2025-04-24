
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/About.jsx";
import ContactUs from "./pages/Contact.jsx";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import { Toaster } from 'react-hot-toast'
import './index.css'
import{App}from './App.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/About",
    element: <AboutUs />,
  },

  // {
  //   path: "/Favorites",
  //   element: <Favorites />
  // },

  {
    path: "/Contact",
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </StrictMode>

);

   

