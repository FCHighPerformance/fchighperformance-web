"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/data/hours";

/**
 * Live open/closed indicator. Updates every minute on the client.
 * Renders nothing until hydrated to avoid SSR/CSR mismatch.
 */
export function OpenNow({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] ${className}`}
    >
      <span
        aria-hidden
        className={`relative inline-block h-2 w-2 rounded-full ${
          status.open ? "bg-emerald-400" : "bg-white/30"
        }`}
      >
        {status.open && (
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        )}
      </span>
      <span>
        {status.open ? "Open Now" : "Closed"} · {status.label}
      </span>
    </span>
  );
}
