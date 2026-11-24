import SiteFrame from "../components/SiteFrame";
import { readLegacy } from "../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/" }
  };
}

export default function HomePage() {
  const page = readLegacy("index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
