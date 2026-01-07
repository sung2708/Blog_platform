import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Github, Linkedin } from "lucide-react";
import useScollToTop from "@/hooks/useScrollToTop";

export default function MainLayout() {
    useScollToTop();
    return (
        <div className="relative min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:px-8 mt-16">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>

            <footer className="border-t bg-muted/40">
                <div className="container mx-auto px-4 py-10 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">MyBlog</h3>
                            <p className="text-sm text-muted-foreground">
                                A place to share knowledge about programming and the latest technologies.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Links</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="/" className="hover:text-primary">Home</a></li>
                                <li><a href="/blog" className="hover:text-primary">Blog</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">Follow</h4>

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/sung2708"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-primary"
                                >
                                    <Github size={24} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/sungpd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-primary"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                        © 2026 MyBlog. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}