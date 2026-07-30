"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  banhoAvulso,
  higienizacaoETosa,
  pacotes,
  pacotesInfo,
  extras,
} from "@/lib/pricing-data";
import PriceTableView from "@/components/PriceTableView";

const tabs = [
  { id: "banho", label: "Banho Avulso", tables: banhoAvulso },
  { id: "tosa", label: "Tosa e Higiênica", tables: higienizacaoETosa },
  { id: "pacotes", label: "Pacotes", tables: pacotes },
  { id: "extras", label: "Extras", tables: extras },
] as const;

export default function PricingExplorer() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("banho");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="scrollbar-gold flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              active === tab.id
                ? "bg-black text-gold-300"
                : "bg-white text-ink-light gold-ring hover:text-gold-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "pacotes" && (
        <ul className="mt-6 grid gap-2 rounded-2xl border border-gold-700/15 bg-gold-100/40 p-5 text-sm text-ink-light sm:grid-cols-2">
          {pacotesInfo.map((info) => (
            <li key={info} className="flex gap-2">
              <span className="text-gold-700">•</span>
              {info}
            </li>
          ))}
        </ul>
      )}

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-6 grid gap-6 md:grid-cols-2"
      >
        {current.tables.map((table) => (
          <PriceTableView key={table.titulo} table={table} />
        ))}
      </motion.div>
    </div>
  );
}
