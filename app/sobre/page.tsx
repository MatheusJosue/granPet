import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaBath,
  FaHandHoldingHeart,
  FaHome,
  FaShieldAlt,
  FaStethoscope,
  FaSyringe,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sobre a GranPet",
  description:
    "Conheça a GranPet: pet shop e centro veterinário em Jundiaí - SP dedicado ao cuidado completo de cães e gatos.",
};

const values = [
  {
    icon: FaHandHoldingHeart,
    title: "Cuidado genuíno",
    text: "Enxergamos cada pet como único, com paciência e atenção em cada etapa do atendimento.",
  },
  {
    icon: FaAward,
    title: "Excelência profissional",
    text: "Equipe preparada em estética animal e medicina veterinária, sempre em busca de fazer o melhor pelo seu pet.",
  },
  {
    icon: FaHome,
    title: "Ambiente acolhedor",
    text: "Um espaço limpo, seguro e pensado para reduzir o estresse do animal durante a visita.",
  },
  {
    icon: FaShieldAlt,
    title: "Compromisso com a saúde",
    text: "Da prevenção ao cuidado clínico, acompanhamos o bem-estar do seu pet com responsabilidade.",
  },
];

const pilares = [
  { icon: FaBath, title: "Banho e Tosa" },
  { icon: FaSyringe, title: "Vacinas e Prevenção" },
  { icon: FaStethoscope, title: "Clínica Veterinária" },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a GranPet"
        title="Cuidado que vem de quem realmente ama animais"
        description="Pet shop e centro veterinário no Centro de Jundiaí, criado para ser o único endereço que seu pet precisa."
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md lg:order-2">
            <div className="overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
              <Image
                src="/images/depois9.jpeg"
                alt="Pet cuidado na GranPet"
                width={520}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-4 hidden rounded-2xl bg-black px-5 py-4 shadow-xl sm:block">
              <p className="text-gradient-gold font-display text-lg font-semibold">
                Pet Shop
              </p>
              <p className="text-xs text-cream/60">&amp; Centro Veterinário</p>
            </div>
          </div>

          <div className="lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Nossa missão"
              title="Um só lugar para o banho, a tosa e a saúde do seu pet"
              description="Na GranPet, unimos estética animal e cuidado veterinário para simplificar a rotina de quem ama seus bichos de estimação. Acreditamos que cuidar bem vai além da aparência: é sobre saúde, conforto e confiança em cada visita."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink-light">
              Por isso, cada atendimento — seja um banho, uma tosa ou uma
              consulta — é feito com atenção ao comportamento, à saúde e às
              necessidades específicas de cada animal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {pilares.map((p) => {
                const Icon = p.icon;
                return (
                  <span
                    key={p.title}
                    className="inline-flex items-center gap-2 rounded-full border border-gold-700/20 bg-gold-100/50 px-4 py-2 text-sm font-medium text-gold-800"
                  >
                    <Icon />
                    {p.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Nossos valores"
            title="O que guia o nosso cuidado"
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-surface p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-700 text-xl text-black">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-light">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-ink-light">
            Quer conhecer todos os nossos serviços?{" "}
            <Link
              href="/servicos"
              className="font-semibold text-gold-800 underline underline-offset-4"
            >
              Veja a lista completa
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Vamos cuidar do seu pet juntos?"
        description="Marque uma visita e conheça de perto o cuidado da GranPet."
      />
    </>
  );
}
