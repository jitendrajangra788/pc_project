import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("services/index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/services" }
  };
}

export default function ServicesPage() {
  const page = readLegacy("services/index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
