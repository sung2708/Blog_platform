import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import { getPostById } from "@/services/blogService";
import AuthorBox from "@/components/blog/AuthorBox";
import CommentSection from "@/components/blog/CommentSection";

export default function BlogDetail() {
    const { id } = useParams<{ id: string }>();
    const post = getPostById(id);

    if (!post) {
        return (
            <div className="text-center py-20 space-y-4">
                <h2 className="text-2xl font-semibold">Post not found!</h2>
                <Link to="/blog">
                    <Button variant="outline">Return to all posts</Button>
                </Link>
            </div>
        );
    }

    return (
        <article className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <Link to="/blog">
                <Button variant="ghost" className="gap-2 p-0 hover:bg-transparent text-muted-foreground hover:text-primary">
                    <ArrowLeft size={16} /> Return to all posts
                </Button>
            </Link>

            <div className="space-y-4">
                <Badge variant="secondary" className="rounded-full">
                    {post.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 text-muted-foreground text-sm border-y py-3">
                    <div className="flex items-center gap-1.5">
                        <User size={14} className="text-primary" />
                        <span className="font-medium text-foreground">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-muted">
                <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-auto max-h-112.5px object-cover transition-all hover:scale-105"
                />
            </div>
            <div className="prose dark:prose-invert prose-lg max-w-none leading-relaxed">
                <ReactMarkdown>{post.content}</ReactMarkdown>
                <section id="comments" className="pb-20">
                    <CommentSection postId={post.id} />
                </section>
                <div className="mt-12 pt-8 border-t">
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground">Written by</h3>
                    <AuthorBox author={post.author} />
                </div>
            </div>
        </article>
    );
}