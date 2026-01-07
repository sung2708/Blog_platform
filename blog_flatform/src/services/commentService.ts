import type { Comment } from "@/types/comment";

const AVATAR_URL = "/avatar/default_avatar.jpg"

const MOCK_COMMENTS: Comment[] = [
    {
        id: "1",
        postId: "1",
        authorName: "Jane Doe",
        authorEmail: "jane.doe@example.com",
        authorAvatar: AVATAR_URL,
        content: "Great post! Really enjoyed the insights on React hooks.", 
        date: "2024-06-10",
        replies: [
            {
                id: "2",
                postId: "1",
                authorName: "John Smith",
                authorEmail: "john.smith@example.com",
                content: "I agree with Jane, hooks have changed the way we write React components!",
                date: "2024-06-11"
            }
        ]
    },
    {
        id: "3",
        postId: "2",
        authorName: "Alice Johnson",
        authorEmail: "alice.johnson@example.com",
        authorAvatar: AVATAR_URL,
        content: "Could you provide more examples on state management with Tailwind?",
        date: "2024-06-12"
    },
    {
        id: "4",
        postId: "1",
        authorName: "Bob Brown",
        authorEmail: "bob.brown@example.com",
        authorAvatar: AVATAR_URL,
        content: "Thanks for the detailed explanation on hooks!",
        date: "2024-06-13"
    },
    {
        id: "5",
        postId: "3",
        authorName: "Charlie Green",
        authorEmail: "charlie.green@example.com",
        authorAvatar: AVATAR_URL,
        content: "Looking forward to more posts like this!",
        date: "2024-06-14",
        replies: [
            {
                id: "6",
                postId: "3",
                authorName: "Diana White",
                authorEmail: "diana.white@example.com",
                authorAvatar: AVATAR_URL,
                content: "Me too! This was very informative.",
                date: "2024-06-15"
            }
        ]
    }
];

export function getCommentsByPostId(postId: string): Comment[] {
    return MOCK_COMMENTS.filter(comment => comment.postId === postId);
}