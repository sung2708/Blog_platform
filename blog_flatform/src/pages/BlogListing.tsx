import { useEffect, useState, useMemo } from "react";
import { BlogSkeleton } from "@/components/blog/BlogSkeleton";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/services/blogService";
import type { Post } from "@/types/blog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export default function BlogListing() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const fetchData = () => {
            const data = getAllPosts();
            setPosts(data);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
        };

        fetchData();
    }, []);
    const categories = useMemo(() => {
        const cats = posts.map((p) => p.category);
        return ["All", ...Array.from(new Set(cats))];
    }, [posts]);
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesSearch = post.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesCategory = 
                activeCategory === "All" || post.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [posts, searchQuery, activeCategory]);

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        All Posts
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A place to share knowledge, experiences, and new discoveries about programming.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search articles..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "default" : "outline"}
                                size="sm"
                                className="rounded-full"
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {isLoading ? (
                <BlogSkeleton />
            ) : (
                <>
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-dashed rounded-xl bg-muted/10">
                            <h3 className="text-lg font-medium">No posts found</h3>
                            <p className="text-muted-foreground mt-1">
                                Try adjusting your search or category filter.
                            </p>
                            <Button 
                                variant="link" 
                                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                                className="mt-4"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}