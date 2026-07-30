import type { IconType } from "react-icons";
import Image from "next/image";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";
import SectionHeading from "@/components/SectionHeading";

export default function ServiceSection({
  id,
  icon: Icon,
  eyebrow,
  title,
  description,
  bullets,
  image,
  reverse = false,
  whatsappMessage,
  tint = false,
  children,
}: {
  id: string;
  icon: IconType;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: { src: string; alt: string };
  reverse?: boolean;
  whatsappMessage: string;
  tint?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-24 ${tint ? "bg-cream-dark/60" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`grid items-center gap-14 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={520}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute -top-6 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-2xl text-gold-300 shadow-xl">
              <Icon />
            </span>
          </div>

          <div>
            <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} />

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-ink-light">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-gold-600" />
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8"
            >
              <FaWhatsapp />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}
