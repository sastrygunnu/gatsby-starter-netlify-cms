import Link from "next/link";
import { PostList } from "@/components/PostList";
import { getAllPostMeta } from "@/lib/posts";
import { site } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPostMeta();

  return (
    <>
      <section className="hero">
        <h1>{site.name}</h1>
        {site.thesis.map((line) => (
          <p className="thesis" key={line}>
            {line}
          </p>
        ))}
      </section>
      <section className="section" aria-labelledby="writing-heading">
        <div className="section-head">
          <h2 id="writing-heading">Writing</h2>
          <Link href="/writing">All essays</Link>
        </div>
        <PostList posts={posts} />
      </section>
    </>
  );
}
