import { Skeleton } from "@/components/ui/skeleton";

export function BlogSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-3">
                    <Skeleton className="h-50 w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-62.5" />
                        <Skeleton className="h-4 w-50" />
                    </div>
                </div>
            ))}
        </div>
    );
}