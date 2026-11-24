const posts = [
  {
    title: "Laptop screen or battery repair in Jaipur",
    date: "12 Nov 2026",
    file: "laptop-repair.jpg",
    src: "/images/laptop-repair.jpg",
    href: "/blog/laptop-repair-jaipur",
    share: "https://skypc.in/blog/laptop-repair-jaipur",
    alt: "Technician repairing an open laptop battery on a wooden desk"
  },
  {
    title: "CCTV installation for a Jaipur home or shop",
    date: "4 Nov 2026",
    file: "cctv-install.jpg",
    src: "/images/cctv-install.jpg",
    href: "/blog/cctv-installation-jaipur",
    share: "https://skypc.in/blog/cctv-installation-jaipur",
    alt: "White dome CCTV camera under a sandstone shop awning in Jaipur"
  },
  {
    title: "Computer AMC for a small office in Jaipur",
    date: "18 Oct 2026",
    file: "computer-amc.jpg",
    src: "/images/computer-amc.jpg",
    href: "/blog/computer-amc-jaipur",
    share: "https://skypc.in/blog/computer-amc-jaipur",
    alt: "Technician checking desktop computers in a small bright office"
  },
  {
    title: "Slow Wi-Fi at home in Jaipur",
    date: "2 Oct 2026",
    file: "slow-wifi.jpg",
    src: "/images/slow-wifi.jpg",
    href: "/blog/slow-wifi-jaipur",
    share: "https://skypc.in/blog/slow-wifi-jaipur",
    alt: "White Wi-Fi router on a wooden table in a bright living room"
  }
];

const defaultFaqs = [
  {
    q: "Why is my computer running slower than usual?",
    a: "Over time, systems accumulate background processes, outdated software, and unnecessary files. We can help optimize your system's performance and ensure it runs efficiently."
  },
  {
    q: "Can you help with virus or malware issues?",
    a: "Yes. We offer full system scans and threat removal so the computer is clean, secure, and running smoothly."
  },
  {
    q: "Do you provide laptop screen or battery replacements?",
    a: "If your screen is cracked or your battery does not hold a charge, we offer component replacement using quality parts."
  },
  {
    q: "What should I do if my PC does not turn on?",
    a: "First, check the power source and cables. If the issue persists, book a diagnostic so we can identify the cause."
  },
  {
    q: "Can you help retrieve data from a non-working device?",
    a: "Yes. We recover data from hard drives, SSDs, and other storage, even if the system is not powering on."
  },
  {
    q: "What is IT AMC service in Jaipur?",
    a: "IT AMC is regular maintenance, repair, and support for computers, laptops, printers, and IT setup in Jaipur."
  }
];

const defaultMarket = {
  title: "On-Site Laptop, Computer & Printer Repair in Jaipur | SKYPC",
  description: "SKYPC in Durgapura, Jaipur: computer, laptop, Apple, printer, CCTV, data recovery, Wi-Fi and AMC. Call +91 90246 83436.",
  whatsapp: "Hello SKYPC, I need a computer service in Jaipur."
};

const pageNames = {
  "/": "Home",
  "/blog": "Guides",
  "/blog/": "Guides",
  "/blog/laptop-repair-jaipur": "Laptop guide",
  "/blog/cctv-installation-jaipur": "CCTV guide",
  "/blog/computer-amc-jaipur": "AMC guide",
  "/blog/slow-wifi-jaipur": "Wi-Fi guide"
};

const actionNames = {
  whatsapp: "WhatsApp tap",
  call: "Phone call",
  book: "Booking form",
  blog: "Opened a guide",
  newsletter: "Newsletter signup"
};

const copy = {
  aaj: ["Today", "Visits, WhatsApp taps, calls and new bookings on this computer."],
  bookings: ["Bookings", "Name, phone, area and service from the homepage form."],
  page: ["Page", "Change the public homepage from here. It saves on this computer and shows when the site opens here."],
  faq: ["Questions", "These questions appear on the homepage. They save as you type."],
  site: ["Site", "Guide photos, the Google title, and the first WhatsApp message."]
};

const pageFields = [
  ["Contact", "phone", "Phone", "+91 90246 83436"],
  ["Contact", "email", "Email", "support@skypc.in"],
  ["Contact", "hours", "Hours", "On-site and remote support"],
  ["Contact", "city", "City", "Durgapura, Jaipur, Rajasthan"],
  ["Contact", "tagline", "Tagline", "Smart service. Reliable support."],
  ["Contact", "blurb", "Footer line", "Smart Service. Reliable Support. SKYPC ensures your systems stay strong."],
  ["Hero", "hero.kicker", "Small label", "Durgapura, Jaipur"],
  ["Hero", "hero.title", "Headline", "On-site laptop and computer repair in Jaipur"],
  ["Hero", "hero.accent", "Headline accent", "at your door."],
  ["Hero", "hero.lead", "Intro", "We're your go-to experts for system setup, software support, upgrades, and everyday tech needs at home or in the office."],
  ["Booking", "book.kicker", "Small label", "Book a visit"],
  ["Booking", "book.title", "Heading", "Book a doorstep visit in Jaipur"],
  ["Booking", "book.line", "Line under the heading", "Get quick service at your doorstep."],
  ["Services", "services.kicker", "Small label", "Services"],
  ["Services", "services.title", "Heading", "Our services at a glance"],
  ["Services", "services.lede", "Intro", "From system diagnostics to repair, SKYPC looks after computers, laptops, printers and CCTV for homes, professionals and small businesses in Jaipur."],
  ["Plans", "plans.kicker", "Small label", "AMC packages"],
  ["Plans", "plans.title", "Heading", "AMC packages for Jaipur"],
  ["Plans", "plans.lede", "Intro", "Choose a smart plan tailored to your device usage. The yearly package is confirmed on a call."],
  ["Steps", "process.title", "Heading", "How doorstep computer repair works"],
  ["Why SKYPC", "why.title", "Heading", "Why we are best"],
  ["Why SKYPC", "why.lead", "Intro", "From first-time users to repeat clients, our commitment to quality and care earns us their trust and referrals."],
  ["Contact block", "faq.title", "Questions heading", "Questions about computer repair in Jaipur"],
  ["Contact block", "contact.title", "Contact heading", "Get in touch with SKYPC"],
  ["Contact block", "help.title", "Call heading", "Call SKYPC for a Jaipur visit"]
];

const STATS_KEY = "skypc-stats";
const FAQ_KEY = "skypc-faqs";
const MARKET_KEY = "skypc-market";
const COVER_KEY = "skypc-covers";
const BOOK_KEY = "skypc-bookings";
const PAGE_KEY = "skypc-page";

let current = 0;
let faqs = [];
let statsStamp = "";
let bookStamp = "";
let faqTimer = 0;
let marketTimer = 0;
let pageTimer = 0;

function readStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    const note = document.getElementById("coverHint");
    if (note) note.textContent = "That photo is too large for this browser. Try a smaller file.";
    return false;
  }
}

function emptyStats() {
  return { views: 0, clicks: {}, pages: {}, days: {}, recent: [] };
}

function loadFaqs() {
  const saved = readStore(FAQ_KEY, null);
  return Array.isArray(saved) && saved.length ? saved : defaultFaqs.map((item) => ({ q: item.q, a: item.a }));
}

function loadBookings() {
  const saved = readStore(BOOK_KEY, []);
  return Array.isArray(saved) ? saved : [];
}

function freshCount(rows) {
  return rows.filter((row) => row.status !== "done").length;
}

function showView(name) {
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== name;
  });
  document.querySelectorAll(".desk-nav button").forEach((button) => {
    if (button.dataset.view === name) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.getElementById("deskTitle").textContent = copy[name][0];
  document.getElementById("deskLead").textContent = copy[name][1];
  if (name === "aaj") paintAaj();
  if (name === "bookings") paintBookings();
}

function paintAaj() {
  const stats = readStore(STATS_KEY, emptyStats());
  const bookings = loadBookings();
  const stamp = JSON.stringify(stats) + "|" + freshCount(bookings);
  if (stamp === statsStamp) return;
  statsStamp = stamp;
  const clicks = stats.clicks || {};
  const cards = [
    { n: stats.views || 0, label: "Site visits", tone: "blue", icon: "M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z M12 12m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0" },
    { n: clicks.whatsapp || 0, label: "WhatsApp", tone: "green", icon: "M7.5 19.5 5 21l.6-3A8 8 0 1 1 12 20a8 8 0 0 1-4.5-.5" },
    { n: clicks.call || 0, label: "Calls", tone: "gold", icon: "M8 5h3l1 3-2 1a11 11 0 0 0 5 5l1-2 3 1v3a2 2 0 0 1-2 2A14 14 0 0 1 6 7a2 2 0 0 1 2-2z" },
    { n: freshCount(bookings), label: "New bookings", tone: "navy", icon: "M8 4h8M8 8h8M6 4.5h12v15H6z", view: "bookings" }
  ];
  const grid = document.getElementById("statGrid");
  grid.replaceChildren();
  cards.forEach((card) => {
    const article = document.createElement(card.view ? "button" : "article");
    if (card.view) article.type = "button";
    article.className = "stat tone-" + card.tone;
    const icon = document.createElement("span");
    icon.className = "stat-icon";
    icon.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + card.icon + '"/></svg>';
    const text = document.createElement("div");
    const strong = document.createElement("strong");
    strong.textContent = String(card.n);
    const label = document.createElement("em");
    label.textContent = card.label;
    text.append(strong, label);
    article.append(icon, text);
    if (card.view) article.addEventListener("click", () => showView(card.view));
    grid.append(article);
  });
  paintWeek(stats.days || {});
  paintActivity(stats.recent || []);
  paintPreview(bookings);
  paintBadge(bookings);
}

function paintWeek(days) {
  const wrap = document.getElementById("weekBars");
  const note = document.getElementById("weekNote");
  wrap.replaceChildren();
  const labels = [];
  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const key = date.toISOString().slice(0, 10);
    labels.push({
      key: key,
      name: date.toLocaleDateString("en-IN", { weekday: "short" }),
      count: days[key] || 0
    });
  }
  const max = Math.max.apply(null, labels.map((item) => item.count).concat(1));
  labels.forEach((item) => {
    const column = document.createElement("div");
    column.className = "bar";
    const value = document.createElement("b");
    value.textContent = item.count ? String(item.count) : "";
    const mark = document.createElement("i");
    mark.style.height = (item.count ? Math.max(18, Math.round((item.count / max) * 112)) : 4) + "px";
    if (!item.count) mark.classList.add("is-empty");
    const caption = document.createElement("span");
    caption.textContent = item.name;
    column.append(value, mark, caption);
    wrap.append(column);
  });
  const total = labels.reduce((sum, item) => sum + item.count, 0);
  note.textContent = total
    ? "The site opened " + total + (total === 1 ? " time" : " times") + " on this computer in the last 7 days."
    : "Open the public site on this computer and the bars will fill in.";
}

function paintActivity(recent) {
  const list = document.getElementById("activity");
  list.replaceChildren();
  if (!recent.length) {
    const item = document.createElement("li");
    item.textContent = "Nothing yet.";
    list.append(item);
    return;
  }
  recent.forEach((event) => {
    const item = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = event.kind === "view"
      ? "Opened " + (pageNames[event.path] || "a page")
      : (actionNames[event.kind] || event.kind);
    const time = document.createElement("time");
    time.dateTime = new Date(event.t).toISOString();
    time.textContent = new Date(event.t).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
    item.append(text, time);
    list.append(item);
  });
}

function bookingLine(row) {
  const bits = [row.service || "Service", row.area || ""];
  if (row.plan) bits.push(row.plan);
  return bits.filter(Boolean).join(" · ");
}

function formatMobile(mobile) {
  const digits = String(mobile || "").replace(/\D/g, "");
  if (digits.length !== 10) return digits ? "+91 " + digits : "";
  return "+91 " + digits.slice(0, 5) + " " + digits.slice(5);
}

function bookingTime(row) {
  return new Date(row.t).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function paintPreview(rows) {
  const list = document.getElementById("bookPreview");
  list.replaceChildren();
  const fresh = rows.filter((row) => row.status !== "done").slice(0, 3);
  if (!fresh.length) {
    const item = document.createElement("li");
    item.textContent = "No new bookings.";
    list.append(item);
    return;
  }
  fresh.forEach((row) => {
    const item = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = row.name + " · " + (row.service || "");
    const time = document.createElement("time");
    time.textContent = bookingTime(row);
    item.append(text, time);
    list.append(item);
  });
}

function paintBadge(rows) {
  const badge = document.getElementById("bookCount");
  const count = freshCount(rows);
  badge.hidden = count === 0;
  badge.textContent = String(count);
}

function paintBookings() {
  const rows = loadBookings();
  const stamp = JSON.stringify(rows);
  paintBadge(rows);
  const list = document.getElementById("bookList");
  if (stamp === bookStamp && list.childElementCount) return;
  bookStamp = stamp;
  list.replaceChildren();
  if (!rows.length) {
    const note = document.createElement("p");
    note.className = "hint";
    note.textContent = "No bookings yet. When someone fills the homepage form, their name and number show up here.";
    list.append(note);
    return;
  }
  const ordered = rows.slice().sort((a, b) => (a.status === "done") - (b.status === "done") || b.t - a.t);
  ordered.forEach((row) => {
    const done = row.status === "done";
    const card = document.createElement("article");
    card.className = "book" + (done ? " is-done" : "");
    const top = document.createElement("div");
    top.className = "book-top";
    const heading = document.createElement("h3");
    heading.textContent = row.name || "No name";
    const pill = document.createElement("span");
    pill.className = "pill " + (done ? "is-done" : "is-new");
    pill.textContent = done ? "Done" : "New";
    top.append(heading, pill);
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = bookingLine(row);
    const phone = document.createElement("a");
    phone.className = "phone";
    phone.href = "tel:+91" + String(row.mobile || "").replace(/\D/g, "");
    phone.textContent = formatMobile(row.mobile);
    const when = document.createElement("p");
    when.className = "meta";
    when.textContent = bookingTime(row) + (row.device ? " · " + row.device : "");
    const actions = document.createElement("div");
    actions.className = "book-actions";
    const doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.className = "mini" + (done ? "" : " solid");
    doneBtn.textContent = done ? "Mark as new" : "Mark done";
    doneBtn.addEventListener("click", () => setBookingStatus(row.id, done ? "new" : "done"));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "mini";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => removeBooking(row.id));
    actions.append(doneBtn, remove);
    card.append(top, meta, phone, when, actions);
    list.append(card);
  });
}

function setBookingStatus(id, status) {
  const rows = loadBookings().map((row) => (row.id === id ? Object.assign({}, row, { status: status }) : row));
  writeStore(BOOK_KEY, rows);
  bookStamp = "";
  statsStamp = "";
  paintBookings();
}

function removeBooking(id) {
  writeStore(BOOK_KEY, loadBookings().filter((row) => row.id !== id));
  bookStamp = "";
  statsStamp = "";
  paintBookings();
}

function selectPost(index) {
  current = index;
  const post = posts[index];
  const cover = document.getElementById("coverImg");
  cover.src = post.src;
  cover.alt = post.alt;
  document.getElementById("coverFile").textContent = post.file;
  document.getElementById("openPost").href = post.href;
  document.querySelectorAll(".post-row").forEach((row, i) => {
    row.setAttribute("aria-current", i === index ? "true" : "false");
  });
}

function renderPosts() {
  const list = document.getElementById("postList");
  list.replaceChildren();
  posts.forEach((post, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "post-row";
    row.setAttribute("role", "listitem");
    const image = document.createElement("img");
    image.alt = "";
    image.width = 224;
    image.height = 148;
    image.src = post.src;
    const text = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = post.title;
    const meta = document.createElement("p");
    meta.textContent = post.date;
    text.append(heading, meta);
    row.append(image, text);
    row.addEventListener("click", () => selectPost(index));
    list.append(row);
  });
}

function renderFaqs() {
  const editor = document.getElementById("faqEditor");
  editor.replaceChildren();
  faqs.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "edit-card";
    const question = document.createElement("input");
    question.type = "text";
    question.value = item.q;
    question.placeholder = "Question";
    question.setAttribute("aria-label", "Question");
    question.addEventListener("input", () => {
      faqs[index].q = question.value;
      queueFaqSave();
    });
    const answer = document.createElement("textarea");
    answer.rows = 3;
    answer.value = item.a;
    answer.placeholder = "Answer";
    answer.setAttribute("aria-label", "Answer");
    answer.addEventListener("input", () => {
      faqs[index].a = answer.value;
      queueFaqSave();
    });
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "text-btn";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      faqs.splice(index, 1);
      renderFaqs();
      queueFaqSave();
    });
    card.append(question, answer, remove);
    editor.append(card);
  });
}

let marketTitle;
let marketDescription;
let marketWhatsapp;
let deskTimer = 0;

function queueFaqSave() {
  clearTimeout(faqTimer);
  faqTimer = setTimeout(saveFaqs, 400);
}

function saveFaqs() {
  const clean = faqs
    .map((item) => ({ q: item.q.trim(), a: item.a.trim() }))
    .filter((item) => item.q && item.a);
  writeStore(FAQ_KEY, clean);
  const note = document.getElementById("faqNote");
  if (note) note.textContent = clean.length ? "Saved." : "Write both a question and an answer.";
}

function addFaq() {
  faqs.push({ q: "", a: "" });
  renderFaqs();
  const fields = document.querySelectorAll("#faqEditor input");
  const last = fields[fields.length - 1];
  if (last) last.focus();
}

function queueMarketSave() {
  clearTimeout(marketTimer);
  marketTimer = setTimeout(saveMarket, 400);
}

function saveMarket() {
  writeStore(MARKET_KEY, {
    title: marketTitle.value.trim() || defaultMarket.title,
    description: marketDescription.value.trim() || defaultMarket.description,
    whatsapp: marketWhatsapp.value.trim() || defaultMarket.whatsapp
  });
  document.getElementById("marketNote").textContent = "Saved.";
}

function copyText(text) {
  const out = document.getElementById("shareOut");
  out.hidden = false;
  out.value = text;
  out.focus();
  out.select();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  return fallbackCopy(text);
}

function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  document.body.append(area);
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  return ok ? Promise.resolve() : Promise.reject(new Error("copy"));
}

function copyGuideClick() {
  const post = posts[current];
  const button = document.getElementById("copyGuide");
  copyText(post.title + "\n" + post.share).then(() => {
    button.textContent = "Copied";
  }).catch(() => {
    button.textContent = "Select the text below";
  });
  setTimeout(() => { button.textContent = "Copy for WhatsApp"; }, 1400);
}

function shrinkCover(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, 1100 / image.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image"));
    };
    image.src = url;
  });
}

function onCoverPick(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const post = posts[current];
  shrinkCover(file).then((dataUrl) => {
    const covers = readStore(COVER_KEY, {});
    covers[post.file] = dataUrl;
    if (!writeStore(COVER_KEY, covers)) return;
    post.src = dataUrl;
    document.querySelectorAll(".post-row")[current].querySelector("img").src = dataUrl;
    selectPost(current);
    document.getElementById("coverHint").textContent = "Photo saved. The blog on this computer now uses it.";
  }).catch(() => {
    document.getElementById("coverHint").textContent = "That photo could not be saved. Try a smaller JPG or PNG.";
  });
}

const defaultLists = {
  checks: [
    { text: "Computer and laptop service" },
    { text: "Apple, printer and CCTV" },
    { text: "Data recovery and Wi-Fi" },
    { text: "Annual maintenance (AMC)" }
  ],
  services: [
    { title: "Computer Services", text: "Diagnosis, OS setup, virus cleanup, and RAM or SSD upgrades." },
    { title: "Laptop Services", text: "Laptop repair and doorstep service for homes and offices in Jaipur." },
    { title: "Apple Services", text: "MacBook and iMac service in Jaipur. Not an Apple-authorised centre." },
    { title: "Printer Services", text: "Printer setup and servicing for home and office." },
    { title: "CCTV Services", text: "CCTV installation and support for homes, shops and offices." },
    { title: "Data Recovery Services", text: "Recovery from hard drives and SSDs, including devices that do not turn on." },
    { title: "Wifi Services", text: "Router setup, weak signal, and home or office network connection." },
    { title: "AMC Services", text: "Regular maintenance, repair and support through the year." }
  ],
  plans: [
    { name: "AMC Services", price: "Call for the yearly plan", a: "Maintenance, repair and support", b: "Computers, laptops, printers and CCTV", featured: false }
  ],
  steps: [
    { title: "Book your service", text: "Online, on a call, or on WhatsApp." },
    { title: "Our technician visits", text: "We come to your home, shop or office." },
    { title: "We fix your device", text: "With genuine parts, explained first." },
    { title: "Pay after service", text: "After the job is finished." }
  ],
  points: [
    { title: "Licensed technician", text: "Qualified and experienced professionals at your service." },
    { title: "On-demand availability", text: "In-office support, doorstep visits, or remote assistance." },
    { title: "Transparent service", text: "Clear diagnosis, simple language, and no hidden fees." },
    { title: "Timely and reliable", text: "Punctual, professional, and process-driven service." }
  ],
  reviews: [
    { text: "Smart Service. Reliable Support. SKYPC ensures your systems stay strong.", name: "SKYPC", place: "Durgapura, Jaipur" }
  ]
};

const listSpecs = [
  { key: "checks", title: "Hero points", add: "Add point", fields: [["text", "Point", "text"]] },
  { key: "services", title: "Service cards", add: "Add service", fields: [["title", "Title", "text"], ["text", "Line", "area"]] },
  { key: "plans", title: "AMC plans", add: "Add plan", fields: [["name", "Name", "text"], ["price", "Price", "text"], ["a", "Point 1", "text"], ["b", "Point 2", "text"], ["featured", "Most popular", "check"]] },
  { key: "steps", title: "Steps", add: "Add step", fields: [["title", "Title", "text"], ["text", "Line", "area"]] },
  { key: "points", title: "Why SKYPC", add: "Add point", fields: [["title", "Title", "text"], ["text", "Line", "area"]] },
  { key: "reviews", title: "Reviews", add: "Add review", fields: [["text", "Quote", "area"], ["name", "Name", "text"], ["place", "Place", "text"]] }
];

let pageLists = null;

function cloneList(items) {
  return JSON.parse(JSON.stringify(items));
}

function loadPageLists() {
  const saved = readStore(PAGE_KEY, {});
  const lists = {};
  Object.keys(defaultLists).forEach((key) => {
    lists[key] = Array.isArray(saved[key]) ? cloneList(saved[key]) : cloneList(defaultLists[key]);
  });
  return lists;
}

function blankItem(spec) {
  const item = {};
  spec.fields.forEach((field) => {
    item[field[0]] = field[2] === "check" ? false : "";
  });
  return item;
}

function renderPage() {
  const editor = document.getElementById("pageEditor");
  const saved = readStore(PAGE_KEY, {});
  editor.replaceChildren();
  let group = null;
  let stack = null;
  pageFields.forEach((field) => {
    if (!group || group.dataset.group !== field[0]) {
      group = document.createElement("details");
      group.className = "card page-group";
      group.dataset.group = field[0];
      group.open = field[0] === "Contact";
      const summary = document.createElement("summary");
      summary.textContent = field[0];
      stack = document.createElement("div");
      stack.className = "stack";
      group.append(summary, stack);
      editor.append(group);
    }
    const label = document.createElement("label");
    label.className = "field";
    label.append(document.createTextNode(field[2]));
    const input = field[3].length > 70 ? document.createElement("textarea") : document.createElement("input");
    if (input.tagName === "TEXTAREA") input.rows = 2;
    else input.type = "text";
    input.dataset.key = field[1];
    input.value = saved[field[1]] || field[3];
    input.addEventListener("input", queuePageSave);
    label.append(input);
    stack.append(label);
  });
}

function queuePageSave() {
  clearTimeout(pageTimer);
  pageTimer = setTimeout(savePage, 400);
}

function sameList(key) {
  return JSON.stringify(pageLists[key]) === JSON.stringify(defaultLists[key]);
}

function renderLists(openKey) {
  const root = document.getElementById("pageLists");
  root.replaceChildren();
  listSpecs.forEach((spec) => {
    const group = document.createElement("details");
    group.className = "card page-group";
    group.open = openKey ? spec.key === openKey : spec.key === "services";
    const summary = document.createElement("summary");
    summary.textContent = spec.title;
    const stack = document.createElement("div");
    stack.className = "stack";
    const tools = document.createElement("div");
    tools.className = "list-tools";
    const count = document.createElement("h3");
    const total = pageLists[spec.key].length;
    count.textContent = total + (total === 1 ? " item" : " items");
    const add = document.createElement("button");
    add.type = "button";
    add.className = "btn btn-ghost";
    add.textContent = spec.add;
    add.addEventListener("click", () => {
      pageLists[spec.key].push(blankItem(spec));
      renderLists(spec.key);
      queuePageSave();
      const cards = document.querySelectorAll("#pageLists details[open] .edit-card");
      const last = cards[cards.length - 1];
      const field = last && last.querySelector("input, textarea");
      if (field) field.focus();
    });
    tools.append(count, add);
    stack.append(tools);
    pageLists[spec.key].forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "edit-card";
      spec.fields.forEach((field) => {
        if (field[2] === "check") {
          const label = document.createElement("label");
          label.className = "field";
          const box = document.createElement("input");
          box.type = "checkbox";
          box.checked = Boolean(item.featured);
          box.addEventListener("change", () => {
            pageLists[spec.key].forEach((row, rowIndex) => {
              row.featured = rowIndex === index ? box.checked : false;
            });
            renderLists(spec.key);
            queuePageSave();
          });
          label.append(box, document.createTextNode(" " + field[1]));
          card.append(label);
          return;
        }
        const label = document.createElement("label");
        label.className = "field";
        label.append(document.createTextNode(field[1]));
        const input = field[2] === "area" ? document.createElement("textarea") : document.createElement("input");
        if (input.tagName === "TEXTAREA") input.rows = 2;
        else input.type = "text";
        input.value = item[field[0]] || "";
        input.addEventListener("input", () => {
          pageLists[spec.key][index][field[0]] = input.value;
          queuePageSave();
        });
        label.append(input);
        card.append(label);
      });
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "text-btn";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => {
        pageLists[spec.key].splice(index, 1);
        renderLists(spec.key);
        queuePageSave();
      });
      card.append(remove);
      stack.append(card);
    });
    group.append(summary, stack);
    root.append(group);
  });
}

function savePage() {
  const previous = readStore(PAGE_KEY, {}) || {};
  const page = {};
  Object.keys(previous).forEach((key) => {
    if (!Array.isArray(previous[key])) page[key] = previous[key];
  });
  pageFields.forEach((field) => {
    const input = document.querySelector('#pageEditor [data-key="' + field[1] + '"]');
    if (!input) return;
    const value = input.value.trim();
    if (value && value !== field[3].trim()) page[field[1]] = value;
    else delete page[field[1]];
  });
  Object.keys(defaultLists).forEach((key) => {
    if (sameList(key)) delete page[key];
    else page[key] = cloneList(pageLists[key]);
  });
  if (Object.keys(page).length) writeStore(PAGE_KEY, page);
  else localStorage.removeItem(PAGE_KEY);
  const note = document.getElementById("pageNote");
  if (note) note.textContent = "Saved. Open the public site in this browser to see it.";
}

function resetPage() {
  localStorage.removeItem(PAGE_KEY);
  pageLists = loadPageLists();
  renderPage();
  renderLists();
  document.getElementById("pageNote").textContent = "Original text is back. Open the public site to see it.";
}

function tickDesk() {
  const aaj = document.getElementById("view-aaj");
  const bookings = document.getElementById("view-bookings");
  if (!aaj || !bookings) return;
  if (!aaj.hidden) paintAaj();
  if (!bookings.hidden) paintBookings();
  if (aaj.hidden && bookings.hidden) paintBadge(loadBookings());
}

function onDeskStore() {
  statsStamp = "";
  bookStamp = "";
  tickDesk();
}

function onDeskVisible() {
  if (document.hidden) return;
  onDeskStore();
}

export function bootDesk() {
  if (typeof document === "undefined") return function () {};
  faqs = loadFaqs();
  pageLists = loadPageLists();
  const savedCovers = readStore(COVER_KEY, {});
  posts.forEach((post) => {
    if (savedCovers[post.file]) post.src = savedCovers[post.file];
  });
  document.querySelectorAll(".desk-nav button").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });
  document.getElementById("openBookings").addEventListener("click", () => showView("bookings"));
  document.getElementById("clearStats").addEventListener("click", () => {
    localStorage.removeItem(STATS_KEY);
    statsStamp = "";
    paintAaj();
  });
  document.getElementById("addFaq").addEventListener("click", addFaq);
  marketTitle = document.getElementById("marketTitle");
  marketDescription = document.getElementById("marketDescription");
  marketWhatsapp = document.getElementById("marketWhatsapp");
  const savedMarket = readStore(MARKET_KEY, defaultMarket);
  marketTitle.value = savedMarket.title || defaultMarket.title;
  marketDescription.value = savedMarket.description || defaultMarket.description;
  marketWhatsapp.value = savedMarket.whatsapp || defaultMarket.whatsapp;
  [marketTitle, marketDescription, marketWhatsapp].forEach((field) => {
    field.addEventListener("input", queueMarketSave);
  });
  document.getElementById("resetMarket").addEventListener("click", () => {
    localStorage.removeItem(MARKET_KEY);
    marketTitle.value = defaultMarket.title;
    marketDescription.value = defaultMarket.description;
    marketWhatsapp.value = defaultMarket.whatsapp;
    document.getElementById("marketNote").textContent = "Original text is back. Open the homepage to see it.";
  });
  document.getElementById("copyGuide").addEventListener("click", copyGuideClick);
  document.getElementById("coverPick").addEventListener("change", onCoverPick);
  document.getElementById("resetPage").addEventListener("click", resetPage);
  renderPage();
  renderLists();
  renderPosts();
  renderFaqs();
  selectPost(0);
  showView("aaj");
  if (deskTimer) clearInterval(deskTimer);
  deskTimer = setInterval(tickDesk, 2000);
  window.addEventListener("storage", onDeskStore);
  document.addEventListener("visibilitychange", onDeskVisible);
  return function () {
    clearInterval(deskTimer);
    deskTimer = 0;
    window.removeEventListener("storage", onDeskStore);
    document.removeEventListener("visibilitychange", onDeskVisible);
  };
}
