let PHONE = "919024683436";

const services = {
  "Computer Services": {
    text: "Diagnosis, optimisation, OS setup, virus cleanup, backup and RAM or SSD upgrades for desktops and laptops in Jaipur.",
    points: [
      "System diagnosis for slow startup, freezing and crashes",
      "Windows or Linux setup, with updates and drivers",
      "Virus and malware scans, data backup and transfer",
      "RAM and SSD upgrades, explained before the work starts"
    ]
  },
  "Laptop Services": {
    text: "Laptop repair and doorstep service in Jaipur, including screen, battery and everyday performance problems.",
    points: [
      "Screen and battery replacement",
      "Slow performance, heating and software issues",
      "On-site visits in Jaipur, or bring the laptop in"
    ]
  },
  "Apple Services": {
    text: "MacBook and iMac service in Jaipur. SKYPC is not an Apple-authorised service centre.",
    points: [
      "MacBook and iMac diagnosis and service",
      "Setup, software and everyday performance help",
      "No claim of affiliation with Apple or any other brand"
    ]
  },
  "Printer Services": {
    text: "Printer setup and servicing for homes, professionals and small businesses.",
    points: [
      "Printer setup and sharing on a home or office network",
      "Paper jams, print quality and driver help",
      "Connection over Wi-Fi or cable"
    ]
  },
  "CCTV Services": {
    text: "CCTV installation and support for homes, shops and offices in Jaipur.",
    points: [
      "Camera installation for home, shop or office",
      "Basic CCTV health check on an AMC visit",
      "Support after the system is installed"
    ]
  },
  "Data Recovery Services": {
    text: "Data recovery from hard drives, SSDs and other storage, including devices that do not turn on.",
    points: [
      "Hard drives, SSDs and other storage",
      "Recovery when the system is not powering on",
      "Backup and transfer onto another device"
    ]
  },
  "Wifi Services": {
    text: "Router setup, weak-signal fixes and network connection for homes and offices in Jaipur.",
    points: [
      "Router configuration and connectivity issues",
      "Printer sharing on the same network",
      "Home and office connections that keep dropping"
    ]
  },
  "AMC Services": {
    text: "Yearly maintenance, repair and support for computers, laptops, printers and IT setup in Jaipur.",
    points: [
      "Regular maintenance so systems keep running",
      "Repair and support for computers, laptops and printers",
      "The package is confirmed on a call before you subscribe"
    ]
  }
};

const deviceByService = {
  "Computer Services": "Desktop",
  "Laptop Services": "Laptop",
  "Apple Services": "Laptop",
  "Printer Services": "Printer",
  "CCTV Services": "CCTV",
  "Data Recovery Services": "Other",
  "Wifi Services": "Router / Network",
  "AMC Services": "Multiple devices"
};

const policies = {
  privacy: {
    title: "Privacy policy",
    body: "SKYPC uses your name, mobile number and location only to schedule and deliver IT support. We do not sell your details. Call or email us if you want a booking request deleted."
  },
  terms: {
    title: "Terms and conditions",
    body: "Service is for homes, offices and small businesses in Jaipur, including Durgapura, Vaishali Nagar, Malviya Nagar, Mansarovar, Raja Park, C-Scheme, Jagatpura and Tonk Road. On-site visits, in-office support and remote assistance are available. Call +91 90246 83436 or email support@skypc.in."
  },
  refund: {
    title: "Refund policy",
    body: "If a repair cannot be completed, you do not pay for work that was not done. Any visit charge is confirmed before the technician starts. AMC plans can be discussed with the team before you subscribe."
  }
};

let header;
let menuBtn;
let nav;
let bookForm;
let formGrid;
let formSuccess;
let serviceSelect;
let deviceSelect;
let planInput;
let planChip;
let planChipText;
let serviceDialog;
let policyDialog;
let dialogTitle;
let dialogText;
let dialogPoints;

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 4);
}

function closeMenu() {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

function setError(input, message) {
  const field = input.closest(".field");
  const err = field.querySelector(".err");
  field.classList.toggle("is-invalid", Boolean(message));
  err.hidden = !message;
  if (message) err.textContent = message;
}

function showDialog(dialog) {
  if (dialog.open) dialog.close();
  dialog.showModal();
}

function openService(name) {
  const service = services[name];
  let card = null;
  document.querySelectorAll(".svc [data-service]").forEach((button) => {
    if (button.dataset.service === name) card = button.closest(".svc");
  });
  if (!service && !card) return;
  dialogTitle.textContent = card ? card.querySelector("h3").textContent : name;
  dialogText.textContent = card ? card.querySelector("p").textContent : service.text;
  dialogPoints.replaceChildren();
  const points = service ? service.points : [card.querySelector("p").textContent];
  points.forEach((point) => {
    const li = document.createElement("li");
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    icon.setAttribute("class", "icon");
    icon.setAttribute("aria-hidden", "true");
    use.setAttribute("href", "#i-check");
    icon.append(use);
    const span = document.createElement("span");
    span.textContent = point;
    li.append(icon, span);
    dialogPoints.append(li);
  });
  showDialog(serviceDialog);
}

function selectPlan(name) {
  if (!bookForm || !serviceSelect || !planInput) {
    location.href = "/book?plan=" + encodeURIComponent(name);
    return;
  }
  planInput.value = name;
  planChip.hidden = false;
  planChipText.textContent = name + " selected";
  const amcOption = Array.prototype.find.call(serviceSelect.options, (option) => /amc/i.test(option.value));
  serviceSelect.value = amcOption ? amcOption.value : serviceSelect.options[0].value;
  deviceSelect.value = "Multiple devices";
  const booking = document.getElementById("booking");
  if (booking) booking.scrollIntoView({ behavior: "smooth" });
}

export function bootSite() {
  if (typeof document === "undefined") return function () {};
  header = document.querySelector(".site-header");
  menuBtn = document.getElementById("menuBtn");
  nav = document.getElementById("siteNav");
  bookForm = document.getElementById("bookForm");
  formGrid = document.getElementById("formGrid");
  formSuccess = document.getElementById("formSuccess");
  serviceSelect = document.getElementById("service");
  deviceSelect = document.getElementById("device");
  planInput = document.getElementById("planInput");
  planChip = document.getElementById("planChip");
  planChipText = document.getElementById("planChipText");
  serviceDialog = document.getElementById("serviceDialog");
  policyDialog = document.getElementById("policyDialog");
  dialogTitle = document.getElementById("dialogTitle");
  dialogText = document.getElementById("dialogText");
  dialogPoints = document.getElementById("dialogPoints");
  if (!header || !menuBtn || !nav) return function () {};

  const meta = document.querySelector('meta[name="description"]');
  originalTitle = document.title;
  originalDescription = meta ? meta.content : "";

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

  const onKey = (event) => {
    if (event.key === "Escape") closeMenu();
  };
  const onResize = () => {
    if (window.innerWidth > 1080) closeMenu();
  };
  const onBodyClick = (event) => {
    const closer = event.target.closest("[data-close]");
    if (closer) closer.closest("dialog").close();

    const serviceBtn = event.target.closest("[data-service]");
    const serviceCard = serviceBtn ? null : event.target.closest(".svc");
    const serviceName = serviceBtn
      ? serviceBtn.dataset.service
      : serviceCard && serviceCard.querySelector("[data-service]")
        ? serviceCard.querySelector("[data-service]").dataset.service
        : "";
    if (serviceName && serviceDialog) openService(serviceName);

    const planBtn = event.target.closest("[data-plan]");
    if (planBtn && bookForm) selectPlan(planBtn.dataset.plan);

    const policyBtn = event.target.closest("[data-policy]");
    if (policyBtn && policyDialog) {
      const policy = policies[policyBtn.dataset.policy];
      document.getElementById("policyTitle").textContent = policy.title;
      document.getElementById("policyBody").textContent = policy.body;
      showDialog(policyDialog);
    }
  };
  const onTrackedClick = (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (href.indexOf("wa.me") !== -1) trackClick("whatsapp");
    else if (href.indexOf("tel:") === 0) trackClick("call");
    else if (link.classList.contains("blog-card") || href.indexOf("/blog") !== -1) trackClick("blog");
  };

  document.addEventListener("keydown", onKey);
  window.addEventListener("resize", onResize);
  document.body.addEventListener("click", onBodyClick);
  document.addEventListener("click", onTrackedClick, true);

if (bookForm) {
deviceSelect.value = deviceByService[serviceSelect.value] || "Other";
serviceSelect.addEventListener("change", () => {
  deviceSelect.value = deviceByService[serviceSelect.value] || "Other";
  if (!/amc/i.test(serviceSelect.value)) {
    planInput.value = "";
    planChip.hidden = true;
  }
});

document.getElementById("clearPlan").addEventListener("click", () => {
  planInput.value = "";
  planChip.hidden = true;
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("custName");
  const mobile = document.getElementById("mobile");
  const area = document.getElementById("area");
  const issue = document.getElementById("issue");
  const nameValue = name.value.trim();
  const mobileValue = mobile.value.replace(/\D/g, "");
  const areaValue = area.value.trim();
  const issueValue = issue.value.trim();

  setError(name, nameValue.length < 2 ? "Please enter your name." : "");
  setError(mobile, /^[6-9]\d{9}$/.test(mobileValue) ? "" : "Enter a 10-digit mobile number.");
  setError(area, areaValue.length < 2 ? "Tell us the area in Jaipur." : "");
  setError(issue, issueValue.length < 3 ? "Tell us what's wrong in a few words." : "");

  const invalid = bookForm.querySelector(".is-invalid");
  if (invalid) {
    invalid.querySelector("input, select, textarea").focus();
    return;
  }

  const lines = [
    "Hello SKYPC, I would like to book a service.",
    "",
    "Name: " + nameValue,
    "Mobile: " + mobileValue,
    "Service: " + serviceSelect.value,
    "Device: " + deviceSelect.value,
    "Location: " + areaValue,
    "What's wrong: " + issueValue
  ];
  if (planInput.value) lines.push("Plan: " + planInput.value);

  const url = new URL("https://wa.me/" + PHONE);
  url.searchParams.set("text", lines.join("\n"));
  document.getElementById("waGo").href = url.toString();
  formGrid.hidden = true;
  formSuccess.hidden = false;
  saveBooking({
    id: Date.now(),
    name: nameValue,
    mobile: mobileValue,
    service: serviceSelect.value,
    device: deviceSelect.value,
    area: areaValue,
    issue: issueValue,
    plan: planInput.value || "",
    status: "new",
    t: Date.now()
  });
  trackClick("book");
  window.open(url.toString(), "_blank", "noopener");
});

document.getElementById("editForm").addEventListener("click", () => {
  formSuccess.hidden = true;
  formGrid.hidden = false;
});

document.getElementById("mobile").addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
  setError(event.target, "");
});

["custName", "area", "issue"].forEach((id) => {
  document.getElementById(id).addEventListener("input", (event) => {
    if (id === "area") event.target.dataset.manual = "1";
    setError(event.target, "");
  });
});

}

const dialogBook = document.getElementById("dialogBook");
if (dialogBook) {
  dialogBook.addEventListener("click", () => {
    const name = dialogTitle ? dialogTitle.textContent : "";
    if (bookForm && serviceSelect) {
      serviceSelect.value = name;
      serviceSelect.dispatchEvent(new Event("change"));
      if (serviceDialog) serviceDialog.close();
      const nameField = document.getElementById("custName");
      if (nameField) nameField.focus();
      return;
    }
    location.href = "/book?service=" + encodeURIComponent(name);
  });
}

const moreWork = document.getElementById("moreWork");
if (moreWork) moreWork.addEventListener("click", () => {
  const extras = [...document.querySelectorAll(".is-extra")];
  const willShow = extras[0].hidden;
  extras.forEach((item) => {
    item.hidden = !willShow;
  });
  moreWork.textContent = willShow ? "Show less" : "View more";
});

const subForm = document.getElementById("subForm");
if (subForm) subForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  const note = document.getElementById("subNote");
  note.hidden = false;
  note.textContent = "Your email app will open to send this request to SKYPC.";
  trackClick("newsletter");
  window.location.href = "mailto:support@skypc.in?subject=" +
    encodeURIComponent("SKYPC updates") +
    "&body=" +
    encodeURIComponent("Please add this email to updates: " + email.value.trim());
});

[serviceDialog, policyDialog].filter(Boolean).forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

const navLinks = [...document.querySelectorAll(".nav a")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      if (href === "#" + entry.target.id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

navLinks.forEach((link) => {
  const href = link.getAttribute("href") || "";
  if (!href.startsWith("#")) return;
  const section = document.querySelector(href);
  if (section) spy.observe(section);
});

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const bookBar = document.createElement("a");
  bookBar.className = "book-bar";
  bookBar.textContent = "Book now";
  const onBookPage = /\/book\/?$/.test(location.pathname);
  bookBar.href = onBookPage ? "#booking" : "/book";
  document.body.appendChild(bookBar);
  document.body.classList.add("has-book-bar");
  const bookingSection = document.getElementById("booking");
  let bookBarObserver;
  if (onBookPage && bookingSection) {
    bookBarObserver = new IntersectionObserver((entries) => {
      const seen = entries.some((entry) => entry.isIntersecting);
      bookBar.hidden = seen;
      document.body.classList.toggle("has-book-bar", !seen);
    }, { threshold: 0.25 });
    bookBarObserver.observe(bookingSection);
  }

  trackView();
  applyDesk();
  bindServiceRail();
  const params = new URLSearchParams(location.search);
  const requestedService = params.get("service");
  const requestedPlan = params.get("plan");
  if (requestedService && serviceSelect) {
    const match = Array.prototype.find.call(serviceSelect.options, (option) => option.value === requestedService);
    if (match) {
      serviceSelect.value = requestedService;
      serviceSelect.dispatchEvent(new Event("change"));
    }
  }
  if (requestedPlan && bookForm) selectPlan(requestedPlan);
  placeVisitor();
  window.addEventListener("storage", applyDesk);
  return function () {
    window.removeEventListener("storage", applyDesk);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("keydown", onKey);
    document.body.removeEventListener("click", onBodyClick);
    document.removeEventListener("click", onTrackedClick, true);
    if (spy) spy.disconnect();
    if (bookBarObserver) bookBarObserver.disconnect();
    bookBar.remove();
    document.body.classList.remove("has-book-bar");
    stopServiceRail();
  };
}

const STATS_KEY = "skypc-stats";
const FAQ_KEY = "skypc-faqs";
const MARKET_KEY = "skypc-market";
const COVER_KEY = "skypc-covers";
const BOOK_KEY = "skypc-bookings";
const PAGE_KEY = "skypc-page";
let originalTitle = "";
let originalDescription = "";

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
  } catch (error) {
    return;
  }
}

function emptyStats() {
  return { views: 0, clicks: {}, pages: {}, days: {}, recent: [] };
}

function pagePath() {
  let path = location.pathname || "/";
  if (path.endsWith("/index.html")) path = path.slice(0, -"index.html".length);
  if (path === "") path = "/";
  return path;
}

function remember(kind, path) {
  const stats = readStore(STATS_KEY, emptyStats());
  const day = new Date().toISOString().slice(0, 10);
  stats.views = stats.views || 0;
  stats.clicks = stats.clicks || {};
  stats.pages = stats.pages || {};
  stats.days = stats.days || {};
  stats.recent = stats.recent || [];
  if (kind === "view") {
    stats.views += 1;
    stats.pages[path] = (stats.pages[path] || 0) + 1;
    stats.days[day] = (stats.days[day] || 0) + 1;
  } else {
    stats.clicks[kind] = (stats.clicks[kind] || 0) + 1;
  }
  stats.recent.unshift({ t: Date.now(), kind: kind, path: path || "" });
  stats.recent = stats.recent.slice(0, 12);
  writeStore(STATS_KEY, stats);
}

function saveBooking(entry) {
  const list = readStore(BOOK_KEY, []);
  const rows = Array.isArray(list) ? list : [];
  rows.unshift(entry);
  writeStore(BOOK_KEY, rows.slice(0, 40));
}

function trackClick(kind) {
  if (location.pathname.indexOf("/admin") !== -1) return;
  remember(kind, pagePath());
}

function trackView() {
  if (location.pathname.indexOf("/admin") !== -1) return;
  remember("view", pagePath());
}

function applyFaqs() {
  const saved = readStore(FAQ_KEY, null);
  const list = document.querySelector(".faq-list");
  if (!saved || !list) return;
  list.replaceChildren();
  saved.forEach((item) => {
    const details = document.createElement("details");
    details.className = "faq";
    const summary = document.createElement("summary");
    summary.append(document.createTextNode(item.q + " "));
    const plus = document.createElement("span");
    plus.className = "plus";
    plus.setAttribute("aria-hidden", "true");
    summary.append(plus);
    const answer = document.createElement("p");
    answer.textContent = item.a;
    details.append(summary, answer);
    list.append(details);
  });
  document.querySelectorAll('script[type="application/ld+json"]').forEach((node) => {
    if (node.textContent.indexOf("FAQPage") === -1) return;
    const data = JSON.parse(node.textContent);
    data.mainEntity = saved.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }));
    node.textContent = JSON.stringify(data);
  });
}

function applyCovers() {
  const covers = readStore(COVER_KEY, null);
  if (!covers) return;
  document.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src") || "";
    Object.keys(covers).forEach((file) => {
      if (covers[file] && src.indexOf(file) !== -1) img.src = covers[file];
    });
  });
}

function phoneDigits(display) {
  let digits = String(display || "").replace(/\D/g, "");
  if (digits.length === 10) digits = "91" + digits;
  return digits.length >= 11 ? digits : "919024683436";
}

function svgUse(href) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", href);
  svg.append(use);
  return svg;
}

function renderChecks(items) {
  const list = document.getElementById("heroChecks");
  if (!list) return;
  list.replaceChildren();
  items.forEach((item) => {
    if (!item.text) return;
    const li = document.createElement("li");
    li.append(svgUse("#i-check"), document.createTextNode(" " + item.text));
    list.append(li);
  });
}

function serviceIcon(title, index) {
  const name = String(title || "").toLowerCase();
  if (name.indexOf("apple") !== -1 || name.indexOf("mac") !== -1 || name.indexOf("laptop") !== -1) return "#i-laptop";
  if (name.indexOf("print") !== -1) return "#i-printer";
  if (name.indexOf("cctv") !== -1 || name.indexOf("camera") !== -1) return "#i-cctv";
  if (name.indexOf("wifi") !== -1 || name.indexOf("wi-fi") !== -1 || name.indexOf("network") !== -1) return "#i-wifi";
  if (name.indexOf("amc") !== -1) return "#i-shield";
  if (name.indexOf("data") !== -1 || name.indexOf("recover") !== -1) return "#i-tool";
  if (name.indexOf("computer") !== -1 || name.indexOf("desktop") !== -1) return "#i-desktop";
  const fallback = ["#i-desktop", "#i-laptop", "#i-printer", "#i-cctv", "#i-wifi", "#i-shield", "#i-tool"];
  return fallback[index % fallback.length];
}

let serviceMotion = 0;
let serviceHold = false;
let serviceHoldTimer = 0;

function stopServiceRail() {
  if (serviceMotion) cancelAnimationFrame(serviceMotion);
  serviceMotion = 0;
  if (serviceHoldTimer) clearTimeout(serviceHoldTimer);
  serviceHoldTimer = 0;
}

function holdServiceRail(ms) {
  serviceHold = true;
  if (serviceHoldTimer) clearTimeout(serviceHoldTimer);
  serviceHoldTimer = setTimeout(() => {
    serviceHold = false;
    serviceHoldTimer = 0;
  }, ms);
}

function ensureServiceLoop(grid) {
  if (!grid || grid.dataset.looped === "1") return;
  const cards = [...grid.querySelectorAll(".svc:not([data-clone='1'])")];
  if (cards.length < 2) return;
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.dataset.clone = "1";
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("[data-service]").forEach((btn) => {
      btn.dataset.service = card.querySelector("[data-service]")?.dataset.service || btn.dataset.service;
    });
    grid.appendChild(clone);
  });
  grid.dataset.looped = "1";
}

function serviceLoopWidth(grid) {
  const originals = [...grid.querySelectorAll(".svc:not([data-clone='1'])")];
  if (!originals.length) return 0;
  const first = originals[0].offsetLeft;
  const last = originals[originals.length - 1];
  return last.offsetLeft + last.offsetWidth - first + 14;
}

function startServiceRail() {
  const grid = document.getElementById("serviceGrid");
  if (!grid || !document.querySelector(".service-rail") || serviceMotion) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  ensureServiceLoop(grid);
  const tick = () => {
    if (!grid.isConnected) {
      stopServiceRail();
      return;
    }
    const loop = serviceLoopWidth(grid);
    if (loop > 12 && !serviceHold) {
      grid.scrollLeft += 0.75;
      if (grid.scrollLeft >= loop) grid.scrollLeft -= loop;
    }
    serviceMotion = requestAnimationFrame(tick);
  };
  serviceMotion = requestAnimationFrame(tick);
}

function bindServiceRail() {
  const rail = document.querySelector(".service-rail");
  if (!rail) return;
  if (rail.dataset.bound !== "1") {
    rail.dataset.bound = "1";
    rail.addEventListener("pointerenter", () => { serviceHold = true; });
    rail.addEventListener("pointerleave", () => { serviceHold = false; });
    rail.addEventListener("pointerdown", () => holdServiceRail(1400));
  }
  startServiceRail();
}

function renderServices(items) {
  const grid = document.getElementById("serviceGrid");
  const footer = document.getElementById("footerServices");
  if (grid) {
    stopServiceRail();
    grid.replaceChildren();
    delete grid.dataset.looped;
    items.forEach((item, index) => {
      if (!item.title) return;
      const article = document.createElement("article");
      article.className = "svc";
      const icon = document.createElement("span");
      icon.className = "svc-icon";
      icon.append(svgUse(serviceIcon(item.title, index)));
      const heading = document.createElement("h3");
      heading.textContent = item.title;
      const text = document.createElement("p");
      text.textContent = item.text || "";
      const button = document.createElement("button");
      button.className = "linkish";
      button.type = "button";
      button.dataset.service = item.title;
      button.append(document.createTextNode("View details "), svgUse("#i-arrow"));
      article.append(icon, heading, text, button);
      grid.append(article);
    });
    startServiceRail();
  }
  if (footer) {
    footer.replaceChildren();
    items.forEach((item) => {
      if (!item.title) return;
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.className = "link";
      button.type = "button";
      button.dataset.service = item.title;
      button.textContent = item.title;
      li.append(button);
      footer.append(li);
    });
  }
  const select = document.getElementById("service");
  if (select) {
    const current = select.value;
    select.replaceChildren();
    items.forEach((item) => {
      if (!item.title) return;
      const option = document.createElement("option");
      option.value = item.title;
      option.textContent = item.title;
      select.append(option);
    });
    const still = Array.prototype.some.call(select.options, (option) => option.value === current);
    select.value = still ? current : select.options[0].value;
  }
}

function renderPlans(items) {
  const grid = document.getElementById("planGrid");
  if (!grid) return;
  grid.replaceChildren();
  items.forEach((item) => {
    if (!item.name) return;
    const article = document.createElement("article");
    article.className = "plan" + (item.featured ? " plan-featured" : "");
    const pop = document.createElement("div");
    pop.className = "pop-row";
    if (item.featured) {
      const badge = document.createElement("p");
      badge.className = "pop";
      badge.textContent = "Most popular";
      pop.append(badge);
    }
    const heading = document.createElement("h3");
    heading.textContent = item.name;
    const price = document.createElement("p");
    price.className = "price";
    price.append(document.createTextNode(item.price || ""));
    if (/\d/.test(item.price || "")) {
      const period = document.createElement("small");
      period.textContent = " / year";
      price.append(period);
    }
    const list = document.createElement("ul");
    [item.a, item.b].forEach((line) => {
      if (!line) return;
      const li = document.createElement("li");
      li.append(svgUse("#i-check"), document.createTextNode(" " + line));
      list.append(li);
    });
    const button = document.createElement("button");
    button.className = "btn " + (item.featured ? "btn-white" : "btn-primary");
    button.type = "button";
    button.dataset.plan = item.name;
    button.textContent = "Choose plan";
    article.append(pop, heading, price, list, button);
    grid.append(article);
  });
}

function renderSteps(items) {
  const list = document.getElementById("stepList");
  if (!list) return;
  list.replaceChildren();
  items.forEach((item, index) => {
    if (!item.title) return;
    const li = document.createElement("li");
    const num = document.createElement("span");
    num.className = "num";
    num.textContent = String(index + 1);
    const heading = document.createElement("h3");
    heading.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text || "";
    li.append(num, heading, text);
    list.append(li);
  });
}

function renderPoints(items) {
  const list = document.getElementById("whyList");
  if (!list) return;
  list.replaceChildren();
  items.forEach((item) => {
    if (!item.title) return;
    const li = document.createElement("li");
    const icon = document.createElement("span");
    icon.className = "why-ico";
    icon.append(svgUse("#i-check"));
    const copy = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = item.title;
    const small = document.createElement("small");
    small.textContent = item.text || "";
    copy.append(strong, small);
    li.append(icon, copy);
    list.append(li);
  });
}

function renderReviews(items) {
  const stack = document.getElementById("reviewStack");
  if (!stack) return;
  stack.replaceChildren();
  items.forEach((item) => {
    if (!item.text) return;
    const figure = document.createElement("figure");
    figure.className = "quote-card";
    const stars = document.createElement("div");
    stars.className = "stars";
    stars.setAttribute("role", "img");
    stars.setAttribute("aria-label", "5 star review");
    stars.textContent = "★★★★★";
    const quote = document.createElement("blockquote");
    const paragraph = document.createElement("p");
    paragraph.textContent = item.text;
    quote.append(paragraph);
    const caption = document.createElement("figcaption");
    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.setAttribute("aria-hidden", "true");
    const initials = (item.name || "S").trim().split(/\s+/).slice(0, 2).map((part) => part.charAt(0).toUpperCase()).join("");
    avatar.textContent = initials || "S";
    const who = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = item.name || "";
    const small = document.createElement("small");
    small.textContent = item.place || "";
    who.append(strong, small);
    caption.append(avatar, who);
    figure.append(stars, quote, caption);
    stack.append(figure);
  });
}

function cleanPlace(text) {
  return String(text || "").replace(/\s+(Tehsil|District|Division)$/i, "").trim();
}

function placeLabel(address) {
  if (!address) return "";
  const area = address.neighbourhood || address.suburb || address.quarter || address.city_district || address.residential || address.hamlet || address.village;
  const city = address.state_district || address.town || address.city || address.county;
  const parts = [];
  [area, city, address.state].forEach((part) => {
    const text = cleanPlace(part);
    if (!text || /municipal|corporation/i.test(text)) return;
    if (parts.some((item) => item.toLowerCase() === text.toLowerCase())) return;
    parts.push(text);
  });
  return parts.join(", ");
}

function setVisitorPlace(label, href) {
  document.querySelectorAll("a.visitor-place").forEach((link) => {
    const spot = link.querySelector(".visitor-spot");
    if (spot) spot.textContent = label;
    if (href) link.href = href;
    link.title = label;
  });
  const area = document.getElementById("area");
  if (!area || !label || label === "Your location" || area.dataset.manual === "1") return;
  area.value = label.slice(0, area.maxLength || 120);
}

function readVisitorPlace(lat, lng) {
  const href = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;
  const url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&zoom=16&lat=" + lat + "&lon=" + lng;
  return fetch(url, { headers: { Accept: "application/json" } })
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      if (!document.querySelector("a.visitor-place")) return;
      const label = data ? placeLabel(data.address) : "";
      setVisitorPlace(label || "Your location", href);
    })
    .catch(() => {
      if (document.querySelector("a.visitor-place")) setVisitorPlace("Your location", href);
    });
}

function placeVisitor() {
  if (!document.querySelector("a.visitor-place") || !navigator.geolocation) return;
  const ask = (accurate) => {
    navigator.geolocation.getCurrentPosition((position) => {
      readVisitorPlace(position.coords.latitude, position.coords.longitude);
    }, () => {
      if (accurate) ask(false);
    }, { enableHighAccuracy: accurate, timeout: accurate ? 12000 : 8000, maximumAge: 0 });
  };
  ask(true);
}

function applyPage() {
  document.querySelectorAll("[data-edit]").forEach((node) => {
    if (node.dataset.original == null) node.dataset.original = node.textContent;
  });
  const page = readStore(PAGE_KEY, null) || {};
  document.querySelectorAll("[data-edit]").forEach((node) => {
    node.textContent = page[node.dataset.edit] || node.dataset.original;
  });
  const phoneNode = document.querySelector("[data-edit='phone']");
  PHONE = phoneDigits(phoneNode ? phoneNode.textContent : "");
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.href = "tel:+" + PHONE;
  });
  const emailNode = document.querySelector("[data-edit='email']");
  const email = emailNode ? emailNode.textContent.trim() : "";
  if (email.indexOf("@") !== -1) {
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      link.href = "mailto:" + email;
    });
  }
  const shopPlace = "Durgapura, Jaipur, Rajasthan";
  const shopMap = "https://www.google.com/maps/place/Durgapura,+Jaipur,+Rajasthan/@26.8517972,75.7862232,15z";
  document.querySelectorAll("a.map-link:not(.visitor-place)").forEach((link) => {
    const label = link.querySelector("[data-edit='city']") || link;
    let place = label.textContent.trim();
    if (place === "Durgapura, Jaipur 302018") {
      place = shopPlace;
      label.textContent = shopPlace;
    }
    if (!place) return;
    link.href = place === shopPlace
      ? shopMap
      : "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place);
  });
  document.querySelectorAll("[data-plan-key]").forEach((button) => {
    const name = document.querySelector('[data-edit="' + button.dataset.planKey + '"]');
    if (name && name.textContent.trim()) button.dataset.plan = name.textContent.trim();
  });
  document.querySelectorAll('script[type="application/ld+json"]').forEach((node) => {
    if (node.textContent.indexOf("LocalBusiness") === -1) return;
    try {
      const data = JSON.parse(node.textContent);
      data.telephone = "+" + PHONE;
      if (email.indexOf("@") !== -1) data.email = email;
      node.textContent = JSON.stringify(data);
    } catch (error) {
      return;
    }
  });
  if (Array.isArray(page.checks)) renderChecks(page.checks);
  if (Array.isArray(page.services)) renderServices(page.services);
  if (Array.isArray(page.plans)) renderPlans(page.plans);
  if (Array.isArray(page.steps)) renderSteps(page.steps);
  if (Array.isArray(page.points)) renderPoints(page.points);
  if (Array.isArray(page.reviews)) renderReviews(page.reviews);
}

function applyMarket() {
  const market = readStore(MARKET_KEY, null);
  const home = document.getElementById("booking");
  if (home) {
    document.title = market && market.title ? market.title : originalTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", market && market.description ? market.description : originalDescription);
  }
  document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
    if (link.id === "waGo") return;
    const url = new URL("https://wa.me/" + PHONE);
    if (market && market.whatsapp) url.searchParams.set("text", market.whatsapp);
    link.href = url.toString();
  });
}

function applyDesk() {
  applyPage();
  applyFaqs();
  applyMarket();
  applyCovers();
}

