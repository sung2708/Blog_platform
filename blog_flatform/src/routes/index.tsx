import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "@/pages/Home";
import BlogListing from "@/pages/BlogListing";
import BlogDetail from "@/pages/BlogDetail";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "blog", element: <BlogListing /> },
            { path: "blog/:id", element: <BlogDetail /> },
            { path: "about", element: <About /> },
            { path: "author/:name", element: <Navigate to="/about" replace /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);