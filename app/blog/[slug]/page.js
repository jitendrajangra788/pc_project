import { notFound } from "next/navigation";
import SiteFrame from "../../../components/SiteFrame";
import { blogSlugs, readBlog } from "../../../lib/legacy";

export function generateStaticParams() {
  return blogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = readBlog(params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/blog/" + params.slug }
  };
}

export default function BlogPostPage({ params }) {
  const page = readBlog(params.slug);
  if (!page) notFound();
  return <SiteFrame html={page.html} kind="site" />;
}
