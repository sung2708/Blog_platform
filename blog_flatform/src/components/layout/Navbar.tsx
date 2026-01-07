import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Menu } from "lucide-react";


export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `transition-all duration-300 hover:text-primary relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${isActive
            ? "text-primary after:w-full"
            : "text-muted-foreground after:w-0 hover:after:w-full"
        }`;
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">B</span>
                    MyBlog
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/blog" className={navLinkClass}>
                            Blog
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                    </nav>
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}