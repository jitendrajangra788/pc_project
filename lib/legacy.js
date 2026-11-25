import fs from "fs";
import path from "path";

const blogFiles = {
  "laptop-repair-jaipur": "blog/laptop-repair-jaipur.html",
  "cctv-installation-jaipur": "blog/cctv-installation-jaipur.html",
  "computer-amc-jaipur": "blog/computer-amc-jaipur.html",
  "slow-wifi-jaipur": "blog/slow-wifi-jaipur.html"
};

function decode(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, "\"");
}

function rewrite(html, file) {
  let next = html;
  next = next.replace(/\.\.\/images\//g, "/images/");
  next = next.replace(/(src|href)="images\//g, '$1="/images/');
  next = next.replace(/\.\.\/index\.html/g, "/");
  next = next.replace(/href="index\.html(#[^"]*)?"/g, (match, hash) => {
    if (file.startsWith("blog/")) return 'href="/blog' + (hash || "") + '"';
    if (file.startsWith("services/")) return 'href="/services' + (hash || "") + '"';
    if (file.startsWith("book/")) return 'href="/book' + (hash || "") + '"';
    if (file.startsWith("about/")) return 'href="/about' + (hash || "") + '"';
    if (file.startsWith("contact/")) return 'href="/contact' + (hash || "") + '"';
    if (file.startsWith("amc/")) return 'href="/amc' + (hash || "") + '"';
    if (file.startsWith("faqs/")) return 'href="/faqs' + (hash || "") + '"';
    return 'href="/' + (hash || "") + '"';
  });
  if (file.startsWith("blog/")) {
    next = next.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, 'href="/blog/$1$2"');
  }
  next = next.replace(/href="(?:\.\.\/)?blog\/index\.html"/g, 'href="/blog"');
  next = next.replace(/href="(?:\.\.\/)?services\/index\.html"/g, 'href="/services"');
  next = next.replace(/href="(?:\.\.\/)?book\/index\.html"/g, 'href="/book"');
  next = next.replace(/href="(?:\.\.\/)?about\/index\.html"/g, 'href="/about"');
  next = next.replace(/href="(?:\.\.\/)?contact\/index\.html"/g, 'href="/contact"');
  next = next.replace(/href="(?:\.\.\/)?amc\/index\.html"/g, 'href="/amc"');
  next = next.replace(/href="(?:\.\.\/)?faqs\/index\.html"/g, 'href="/faqs"');

  next = next.replace(/href="(?:\.\.\/)?blog\/([a-z0-9-]+)\.html"/g, 'href="/blog/$1"');
  next = next.replace(/href="admin\/index\.html"/g, 'href="/admin"');
  next = next.replace(/<script\s+src="[^"]*"><\/script>/g, "");
  return next;
}

export function readLegacy(file) {
  const raw = fs.readFileSync(path.join(process.cwd(), file), "utf8");
  const title = decode((raw.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "SKYPC");
  const description = decode((raw.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  const jsonld = [...raw.matchAll(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g)].join("\n");
  const bodyMatch = raw.match(/<body\b[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : "";
  return {
    title: title.trim(),
    description: description.trim(),
    html: rewrite(jsonld + body, file)
  };
}

export function blogSlugs() {
  return Object.keys(blogFiles);
}

export function readBlog(slug) {
  const file = blogFiles[slug];
  if (!file) return null;
  return readLegacy(file);
}
