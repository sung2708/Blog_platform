import type { Post } from "@/types/blog";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <Link to={`/blog/${post.id}`}>
            <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300 border-muted-foreground/20">
                <div className="aspect-video overflow-hidden">
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <CardHeader className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="font-normal">
                            {post.category}
                        </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl hover:text-primary transition-colors">
                        {post.title}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.description}
                    </p>
                </CardContent>

                <CardFooter className="flex items-center text-xs text-muted-foreground gap-2 pt-0">
                    <Calendar size={14} />
                    {post.date}
                    <div className="flex items-center gap-2">
                        <img src={post.author.avatar} className="w-6 h-6 rounded-full" />
                        <span className="text-xs font-medium">{post.author.name}</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}