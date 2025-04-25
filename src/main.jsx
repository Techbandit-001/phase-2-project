import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
import RecipeDetails from "./pages/RecipeDetails";
import { App } from "./App.jsx";
import AboutUs from "./pages/About.jsx";
import ContactUs from "./pages/Contact.jsx";
import Favorites from "./pages/Favourites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/About",
    element: <AboutUs />,
  },

  {
    path: "/Favorites",
    element: <Favorites />,
  },

  {
    path: "/Contact",
    element: <ContactUs />,
  },
  {
    path: "/RecipeList/:recipeId",
    element:<RecipeDetails/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </StrictMode>
);
