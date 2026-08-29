import { ImageResponse } from "next/og";
import { getPost } from "@/lib/posts";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = "Essay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#1c1712",
          padding: "72px",
          borderLeft: "16px solid #8f3318",
        }}
      >
        <div style={{ fontSize: 26, color: "#6a6158" }}>{site.name}</div>
        <div
          style={{
            fontSize: post.title.length > 60 ? 48 : 58,
            lineHeight: 1.15,
            letterSpacing: "-0.04em",
            maxWidth: 1000,
          }}
        >
          {post.title}
        </div>
        <div style={{ fontSize: 24, color: "#8f3318" }}>sastry.dev</div>
      </div>
    ),
    size,
  );
}
