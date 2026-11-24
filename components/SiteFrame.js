"use client";

import { useEffect, useRef } from "react";

export default function SiteFrame({ html, kind }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    node.innerHTML = html || "";

    let stop = function () {};
    let cancel = false;
    const load = kind === "desk"
      ? import("../admin/desk.js")
      : import("../js/main.js");
    load.then((mod) => {
      if (cancel) return;
      stop = (kind === "desk" ? mod.bootDesk() : mod.bootSite()) || function () {};
    });

    return () => {
      cancel = true;
      stop();
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [kind, html]);

  return <div ref={ref} suppressHydrationWarning />;
}
