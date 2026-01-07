import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { router } from "./routes";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}