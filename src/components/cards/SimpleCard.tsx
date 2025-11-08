import Link from "next/link";
import { Insight } from "@/types/insight";

export const SimpleCard = ({ post }: { post: Insight }) => {
  return (
    <Link href={post.url} className="bg-gradient-gray border border-border shadow-md rounded-md p-4">
      <h4 className="text-lg font-semibold">{post.title}</h4>
    </Link>
  );
};

export default SimpleCard;