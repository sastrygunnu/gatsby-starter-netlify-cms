import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <p className="lede">That URL is not on this site.</p>
      <p>
        <Link href="/">Home</Link>
        {" · "}
        <Link href="/writing">Writing</Link>
        {" · "}
        <Link href="/about">About</Link>
      </p>
    </div>
  );
}
