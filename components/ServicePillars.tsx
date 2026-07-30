"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaBath, FaStethoscope, FaSyringe } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

const pillars = [
  {
    icon: FaBath,
    title: "Banho e Tosa",
    href: "/servicos#banho-e-tosa",
    text: "Banho, tosa higiênica, tesoura e máquina, hidratação e pacotes mensais para todos os portes e tipos de pelagem.",
  },
  {
    icon: FaSyringe,
    title: "Vacinas e Prevenção",
    href: "/servicos#vacinas",
    text: "Vacinação em dia, vermifugação e controle de pulgas e carrapatos para a saúde do seu pet.",
  },
  {
    icon: FaStethoscope,
    title: "Clínica Veterinária",
    href: "/servicos#clinica-veterinaria",
    text: "Consultas, exames e acompanhamento clínico completo com atenção individual para cada animal.",
  },
];

export default function ServicePillars() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Cuidado completo para cães e gatos"
          description="Três pilares para o bem-estar do seu pet, em um único endereço no Centro de Jundiaí."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={pillar.href}
                  className="card-surface group flex h-full flex-col gap-4 p-8 transition-transform hover:-translate-y-1.5"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-700 text-xl text-black shadow-[var(--shadow-gold)]">
                    <Icon />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-light">
                    {pillar.text}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold-800 group-hover:gap-3">
                    Saiba mais
                    <FaArrowRight className="text-xs transition-all" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
