import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaw,
  FaWhatsapp,
} from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre a GranPet", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-cream/80">
      <div className="bg-noise-gold pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/granpet-icon.png"
                alt="GranPet"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-gradient-gold font-display text-2xl font-semibold">
                GranPet
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Pet shop e centro veterinário em Jundiaí, cuidando de cada cão e
              gato com a atenção de quem trata seu pet como parte da família.
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200"
            >
              <FaInstagram />
              {siteConfig.instagramHandle}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.15em] text-gold-300 uppercase">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.15em] text-gold-300 uppercase">
              Horário
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.hours.map((h) => (
                <li key={h.dias} className="flex items-start gap-2">
                  <FaClock className="mt-1 shrink-0 text-gold-500" />
                  <span>
                    {h.dias}
                    <br />
                    <span className="text-cream/55">{h.horario}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.15em] text-gold-300 uppercase">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-gold-300"
                >
                  <FaWhatsapp className="mt-1 shrink-0 text-gold-500" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 hover:text-gold-300"
                >
                  <FaEnvelope className="mt-1 shrink-0 text-gold-500" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-gold-300"
                >
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-gold-500" />
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} GranPet. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            Feito com cuidado
            <FaPaw className="text-gold-500" />
          </p>
          <p>Feito por MJXC Soluções em TI</p>
        </div>
      </div>
    </footer>
  );
}
