import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Comment } from "@/types/comment";
import { getCommentsByPostId } from "@/services/commentService";
import { useState, useEffect } from "react";

function CommentItem({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) {
    return (
        <div className={`flex space-x-4 ${isReply ? "mt-4 ml-12 border-l-2 pl-4" : "mt-6"}`}>
            <img
                src={comment.authorAvatar}
                alt={comment.authorName}
                className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1">
                <div className="flex items-center space-x-2">
                    <p className="font-semibold text-sm">{comment.authorName}</p>
                    <span className="text-xs text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-sm mt-1 text-foreground/90">{comment.content}</p>
                {comment.replies && comment.replies.length > 0 && (
                    <div className="space-y-2">
                        {comment.replies.map((reply) => (
                            <CommentItem key={reply.id} comment={reply} isReply={true} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CommentSection({ postId }: { postId: string }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>("");

    useEffect(() => {
        const fetchComments = async () => {
            const data = await getCommentsByPostId(postId);
            setComments(data);
        };
        fetchComments();
    }, [postId]);

    return (
        <div className="mt-16 border-t pt-10">
            <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
            <div className="divide-y divide-border">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))
                ) : (
                    <p className="text-muted-foreground text-sm italic">No comments yet. Be the first to share your thoughts!</p>
                )}
            </div>

            <div className="mt-12 bg-muted/30 p-6 rounded-xl border">
                <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
                <Textarea
                    placeholder="Write your comment here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="mb-4 bg-background"
                />
                <Button disabled={!newComment.trim()}>Submit Comment</Button>
            </div>
        </div>
    );
}