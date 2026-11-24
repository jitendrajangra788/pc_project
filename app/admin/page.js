import SiteFrame from "../../components/SiteFrame";
import { readLegacy } from "../../lib/legacy";

export const metadata = {
  title: "SKYPC desk",
  robots: { index: false, follow: false }
};

export default function AdminPage() {
  const page = readLegacy("admin/index.html");
  return <SiteFrame html={page.html} kind="desk" />;
}
