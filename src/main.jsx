import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  About,
  Blog,
  ContactPage,
  Donate,
  ErrorBox,
  Gallery,
  Home,
  OurDonors,
  UpComingEvents,
} from "./components/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBox />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
      {
        path: "ourdonors",
        element: <OurDonors />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "upcomingevents",
        element: <UpComingEvents />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
