export interface Comment {
    id: string;
    postId: string;
    authorName: string;
    authorAvatar?: string;
    authorEmail: string;
    content: string;
    date: string;
    replies?: Comment[];
}