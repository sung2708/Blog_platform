import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import BlogListing from "@/pages/BlogListing";
import BlogDetail from "@/pages/BlogDetail";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import { ROUTES } from "./paths";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },

            { path: ROUTES.BLOG.slice(1), element: <BlogListing /> },
            { path: ROUTES.BLOG_DETAIL.slice(1), element: <BlogDetail /> },

            { path: ROUTES.ABOUT.slice(1), element: <About /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);
