import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("book/index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/book" }
  };
}

export default function BookPage() {
  const page = readLegacy("book/index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
