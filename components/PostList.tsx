import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

type PostListProps = {
  posts: PostMeta[];
};

export function PostList({ posts }: PostListProps) {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <article>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <h2>
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
