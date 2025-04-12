import Image from "next/image";
import Link from "next/link";
import { Insight } from "@/types/insight";

export const PostCard = ({ post }: { post: Insight }) => {
  return (
    <Link href={post.url} className="bg-gradient-gray border dark:border-white/[0.2] border-white-100/[0.2] shadow-md rounded-md p-4">
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
    </Link>
  );
};

export default PostCard;