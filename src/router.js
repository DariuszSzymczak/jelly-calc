import { createBrowserRouter, Router } from "react-router-dom";
import MainView from "./views/MainView/MainView";
import CalcView from "./views/CalcView/CalcView";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
  },
  {
    path: "/calculator",
    element: <CalcView />,
  },
]);
