import { Feed } from "feed";
import { getAllPostMeta } from "@/lib/posts";
import { site } from "@/lib/site";

export async function buildRssFeed(): Promise<string> {
  const feed = new Feed({
    title: site.name,
    description: site.description,
    id: site.url,
    link: site.url,
    language: "en",
    copyright: `© ${new Date().getFullYear()} ${site.name}`,
    author: {
      name: site.name,
      link: site.url,
    },
  });

  for (const post of getAllPostMeta()) {
    feed.addItem({
      title: post.title,
      id: `${site.url}/writing/${post.slug}`,
      link: `${site.url}/writing/${post.slug}`,
      description: post.description,
      date: new Date(`${post.date}T12:00:00.000Z`),
    });
  }

  return feed.rss2();
}
