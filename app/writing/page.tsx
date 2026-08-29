import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getAllPostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on banking AI, mobile architecture, core integration, and onboarding — written from production delivery.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const posts = getAllPostMeta();

  return (
    <>
      <header className="article-header">
        <h1 className="page-title">Writing</h1>
        <p className="lede">
          Short notes from digital banking delivery: mobile architecture, core integration,
          onboarding, and production AI.
        </p>
      </header>
      <PostList posts={posts} />
    </>
  );
}
