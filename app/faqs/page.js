import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("faqs/index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/faqs" }
  };
}

export default function FaqsPage() {
  const page = readLegacy("faqs/index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
