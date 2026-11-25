export function initFaqsHelp() {
  const root = document.querySelector(".help-page");
  if (!root || root.dataset.helpReady === "1") return function () {};
  root.dataset.helpReady = "1";

  const search = document.getElementById("helpSearch");
  const items = [...root.querySelectorAll(".help-item")];
  const empty = document.getElementById("helpEmpty");
  const viewAll = document.getElementById("helpViewAll");
  const clearBtn = document.getElementById("helpClear");
  const status = document.getElementById("helpStatus");
  const filters = [...root.querySelectorAll("[data-help-filter]")];
  const topics = [...root.querySelectorAll("[data-help-topic]")];
  const chips = [...root.querySelectorAll("[data-help-chip]")];
  const labels = {
    all: "All",
    laptop: "Laptop",
    computer: "Computer",
    printer: "Printer",
    cctv: "CCTV",
    booking: "Booking",
    amc: "AMC"
  };

  let category = "all";
  let query = "";
  let showAll = false;

  function normalize(text) {
    return String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function apply() {
    const q = normalize(query);
    let visible = 0;
    let shown = 0;

    items.forEach((item) => {
      const cats = String(item.dataset.category || "all").split(/\s+/);
      const hay = normalize(item.dataset.search || item.textContent);
      const matchCat = category === "all" || cats.indexOf(category) !== -1;
      const matchQuery = !q || hay.indexOf(q) !== -1;
      const isMatch = matchCat && matchQuery;

      if (!isMatch) {
        item.hidden = true;
        return;
      }

      visible += 1;
      const withinPopular = showAll || item.dataset.popular === "1" || q || category !== "all";
      if (!withinPopular) {
        item.hidden = true;
        return;
      }

      item.hidden = false;
      shown += 1;
    });

    if (empty) empty.hidden = shown > 0;
    if (viewAll) {
      const needsToggle = !q && category === "all" && visible > shown;
      viewAll.hidden = !(needsToggle || (showAll && !q && category === "all"));
      viewAll.textContent = showAll ? "Show less" : "View all →";
    }
    if (clearBtn) clearBtn.hidden = !(category !== "all" || q);
    if (status) {
      if (q) status.textContent = shown + " result" + (shown === 1 ? "" : "s") + " for “" + query.trim() + "”";
      else if (category !== "all") status.textContent = shown + " question" + (shown === 1 ? "" : "s") + " in " + (labels[category] || category);
      else if (showAll) status.textContent = "Showing all " + shown + " questions";
      else status.textContent = "Showing popular answers";
    }
  }

  function setCategory(next) {
    category = next || "all";
    showAll = category !== "all";
    filters.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.helpFilter === category);
    });
    topics.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.helpTopic === category);
    });
    apply();
    const list = document.getElementById("helpQuestions");
    if (list) list.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (search) {
    search.addEventListener("input", () => {
      query = search.value;
      showAll = true;
      apply();
    });
  }

  filters.forEach((btn) => {
    btn.addEventListener("click", () => setCategory(btn.dataset.helpFilter));
  });

  topics.forEach((btn) => {
    btn.addEventListener("click", () => setCategory(btn.dataset.helpTopic));
  });

  chips.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!search) return;
      search.value = btn.dataset.helpChip || "";
      query = search.value;
      showAll = true;
      apply();
      search.focus();
    });
  });

  if (viewAll) {
    viewAll.addEventListener("click", () => {
      showAll = !showAll;
      apply();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (search) search.value = "";
      query = "";
      setCategory("all");
      showAll = false;
      apply();
    });
  }

  apply();

  return function () {
    delete root.dataset.helpReady;
  };
}
