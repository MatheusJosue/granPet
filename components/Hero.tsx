"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPaw,
  FaStethoscope,
  FaWhatsapp,
} from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="bg-noise-gold relative overflow-hidden bg-black pt-10 pb-14 sm:pt-20 sm:pb-28">
      <FaPaw
        className="paw-print animate-float hidden sm:block"
        style={{ top: "14%", left: "6%", fontSize: 54, ["--rot" as string]: "-16deg" }}
      />
      <FaPaw
        className="paw-print animate-float hidden sm:block"
        style={{ bottom: "12%", left: "14%", fontSize: 34, animationDelay: "1s", ["--rot" as string]: "10deg" }}
      />
      <FaPaw
        className="paw-print animate-float hidden sm:block"
        style={{ top: "30%", right: "8%", fontSize: 64, animationDelay: "0.5s", ["--rot" as string]: "18deg" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="eyebrow eyebrow-dark">
            <FaPaw />
            Pet Shop &amp; Veterinário em Jundiaí
          </span>

          <h1 className="mt-5 font-display text-[2.15rem] leading-[1.1] font-semibold text-cream sm:mt-6 sm:text-5xl lg:text-[3.4rem]">
            Seu pet merece ser tratado como{" "}
            <span className="text-gradient-gold">realeza</span>
          </h1>

          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-cream/65 sm:mt-6 sm:text-lg">
            Banho, tosa, vacinas e consultas em um só lugar. Cuidamos de cada
            cão e gato com a atenção e o carinho que só quem ama animais pode
            oferecer.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold animate-pulse-gold w-full sm:w-auto"
            >
              <FaWhatsapp />
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/servicos"
              className="btn-outline btn-outline-light w-full sm:w-auto"
            >
              <FaStethoscope />
              Ver serviços
            </Link>
          </div>

          <div className="mt-8 grid w-full grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
            <InfoChip icon={<FaWhatsapp />} label="Agende" value={siteConfig.phoneDisplay} />
            <InfoChip icon={<FaMapMarkerAlt />} label="Centro, Jundiaí" value="Prudente de Moraes" />
            <InfoChip icon={<FaClock />} label="Ter a Sex" value="8h às 17h" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-gold-300/25 via-transparent to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border-4 border-gold-400/70 shadow-2xl">
            <Image
              src="/images/granpet-nairobi.jpeg"
              alt="Pet cuidado com carinho"
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
              className="object-cover"
              priority
            />
          </div>
          <div className="card-surface absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 px-5 py-3 text-center sm:-bottom-8 sm:px-6 sm:py-4">
            <p className="font-display text-xs font-semibold text-ink sm:text-sm">
              Cuidado completo, do banho ao check-up
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center sm:flex-row sm:gap-3 sm:rounded-2xl sm:px-4 sm:text-left">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-300/15 text-sm text-gold-300 sm:h-10 sm:w-10 sm:text-base">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-[0.6rem] tracking-wider text-cream/50 uppercase sm:text-[0.65rem]">
          {label}
        </span>
        <span className="block text-[0.72rem] font-medium text-cream/90 sm:text-sm">
          {value}
        </span>
      </span>
    </div>
  );
}
