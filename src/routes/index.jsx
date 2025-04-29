import { createBrowserRouter } from "react-router-dom";
import Reviews from "../components/Reviews";

const router = createBrowserRouter([
  {
    path: "/reviews",
    element: <Reviews />,
  },
  // Add more routes here as needed
]);

export default router;
