import { FaPaw, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

export default function CtaBand({
  title = "Pronto para agendar o cuidado do seu pet?",
  description = "Fale agora pelo WhatsApp e garanta um horário para banho, tosa ou consulta.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-noise-gold relative overflow-hidden bg-black py-20 text-center">
      <FaPaw
        className="paw-print"
        style={{ top: "20%", left: "10%", fontSize: 40 }}
      />
      <FaPaw
        className="paw-print"
        style={{ bottom: "18%", right: "12%", fontSize: 52 }}
      />

      <div className="relative mx-auto max-w-2xl px-5">
        <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-cream/65">{description}</p>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold animate-pulse-gold mt-8 inline-flex"
        >
          <FaWhatsapp />
          {siteConfig.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
