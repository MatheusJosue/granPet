import type { Metadata } from "next";
import {
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a GranPet: WhatsApp, endereço, horário de funcionamento e localização no Centro de Jundiaí - SP.",
};

const cards = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsappUrl,
    accent: "#25D366",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagramUrl,
    accent: "#c9a05a",
  },
  {
    icon: FaEnvelope,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    accent: "#b89040",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Endereço",
    value: siteConfig.address,
    href: siteConfig.mapsUrl,
    accent: "#b89040",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale com a GranPet"
        title="Estamos prontos para receber você e seu pet"
        description="Agende pelo WhatsApp, siga a gente no Instagram ou venha nos visitar no Centro de Jundiaí."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface flex flex-col items-center gap-3 p-7 text-center transition-transform hover:-translate-y-1"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full text-xl text-white"
                    style={{ backgroundColor: card.accent }}
                  >
                    <Icon />
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-gold-800 uppercase">
                    {card.label}
                  </span>
                  <span className="text-sm leading-relaxed font-medium text-ink">
                    {card.value}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="card-surface p-8">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
                <FaClock className="text-gold-600" />
                Horário de funcionamento
              </h3>
              <ul className="mt-6 space-y-4">
                {siteConfig.hours.map((h) => (
                  <li
                    key={h.dias}
                    className="flex items-center justify-between border-b border-gold-700/10 pb-3 text-sm last:border-0"
                  >
                    <span className="font-medium text-ink">{h.dias}</span>
                    <span className="text-ink-light">{h.horario}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface overflow-hidden">
              <iframe
                title="Localização da GranPet"
                src={siteConfig.mapsEmbedUrl}
                className="h-[340px] w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Vem cuidar do seu pet com a gente"
        description="Estamos na Rua Prudente de Moraes, 1430, Centro, Jundiaí - SP."
      />
    </>
  );
}
