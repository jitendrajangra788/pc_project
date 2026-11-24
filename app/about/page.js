import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("about/index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/about" }
  };
}

export default function AboutPage() {
  const page = readLegacy("about/index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
