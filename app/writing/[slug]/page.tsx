import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getAllPostMeta, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `/writing/${post.slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.description,
        publishedTime: post.date,
        url: `/writing/${post.slug}`,
        authors: [site.name],
      },
      twitter: {
        title: post.title,
        description: post.description,
      },
    };
  } catch {
    return { title: "Not found" };
  }
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  let post;

  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <header className="article-header">
        <p className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true"> · </span>
          <span>{post.readingMinutes} min read</span>
        </p>
        <h1>{post.title}</h1>
      </header>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
