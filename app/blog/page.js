import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("blog/index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/blog" }
  };
}

export default function BlogPage() {
  const page = readLegacy("blog/index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
