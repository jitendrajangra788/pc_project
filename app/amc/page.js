import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export function generateMetadata() {
  const page = readLegacy("amc/index.html");
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/amc" }
  };
}

export default function AmcPage() {
  const page = readLegacy("amc/index.html");
  return <SiteFrame html={page.html} kind="site" />;
}
