import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export type Post = PostMeta & {
  content: string;
  html: string;
  readingMinutes: number;
};

type FrontMatter = {
  title: string;
  description: string;
  date: string;
};

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

function listSlugs(): string[] {
  return fs
    .readdirSync(WRITING_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readMatter(slug: string) {
  const filePath = path.join(WRITING_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as FrontMatter;

  if (!data.title || !data.description || !data.date) {
    throw new Error(`Missing front matter in ${slug}.md`);
  }

  return { data, content: parsed.content };
}

export function getPostMeta(slug: string): PostMeta {
  const { data } = readMatter(slug);
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
  };
}

export function getAllPostMeta(): PostMeta[] {
  return listSlugs()
    .map(getPostMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post> {
  const { data, content } = readMatter(slug);
  const html = await markdownToHtml(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    content,
    html,
    readingMinutes: readingMinutes(content),
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = listSlugs();
  const posts = await Promise.all(slugs.map(getPost));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
