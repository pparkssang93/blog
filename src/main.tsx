import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";

// pages
import MainPage from "./pages/MainPage";
import PostingContentsPage from "./pages/PostingContentsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            {
                path: "posts/:id",
                element: <PostingContentsPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
