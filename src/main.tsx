import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Index as Mainpage } from "./pages/main/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainpage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
