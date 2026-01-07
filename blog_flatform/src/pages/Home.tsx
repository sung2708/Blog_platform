import { useEffect, useState } from "react";
import { BlogSkeleton } from "@/components/blog/BlogSkeleton";
import type { Post } from "@/types/blog";
import { getAllPosts } from "@/services/blogService";
import PostCard from "@/components/blog/PostCard";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
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
    }
        , []);
    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Welcome to MyBlog
                </h1>
                <p className="text-xl text-muted-foreground">
                    Discover insightful articles on programming and the latest technologies.
                </p>
            </div>
            {isLoading ? (
                <BlogSkeleton />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(0, 3).map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
            {!isLoading && posts.length === 0 && (
                <div className="text-center py-20 border rounded-xl bg-muted/20">
                    <p className="text-muted-foreground">No posts available.</p>
                </div>
            )}
        </div>
    );

}