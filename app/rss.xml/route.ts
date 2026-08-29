import { buildRssFeed } from "@/lib/rss";

export const dynamic = "force-static";

export async function GET() {
  const rss = await buildRssFeed();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
