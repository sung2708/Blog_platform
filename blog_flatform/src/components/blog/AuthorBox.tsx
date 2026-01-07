import type { Author } from "@/types/blog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

export default function AuthorBox({ author }: { author: Author }) {
    return (
        <div className="flex items-center gap-4 rounded-lg border bg-secondary/50 p-4">
            <img
                src={author.avatar}
                alt={author.name}
                className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-0.5">
                <p className="font-semibold leading-tight">{author.name}</p>
                <p className="text-xs text-muted-foreground leading-tight">
                    {author.role}
                </p>

                <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="mt-1 w-fit gap-2 px-2"
                >
                    <Link to="/about">
                        <UserCircle size={16} />
                        View profile
                    </Link>
                </Button>
            </div>
        </div>
    );
}
