import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("contact/index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/contact" }
  };
}

export default function ContactPage() {
  const page = readLegacy("contact/index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
