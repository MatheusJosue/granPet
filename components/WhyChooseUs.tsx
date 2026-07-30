"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaHandHoldingHeart, FaHome, FaShieldAlt } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: FaHandHoldingHeart,
    title: "Cuidado genuíno",
    text: "Cada pet é tratado com paciência, respeito e muito carinho, do início ao fim do atendimento.",
  },
  {
    icon: FaAward,
    title: "Equipe experiente",
    text: "Profissionais capacitados em estética animal e medicina veterinária para cuidar da sua família de patas.",
  },
  {
    icon: FaHome,
    title: "Ambiente acolhedor",
    text: "Um espaço limpo, organizado e pensado para o conforto e a segurança do seu animal.",
  },
  {
    icon: FaShieldAlt,
    title: "Compromisso com a saúde",
    text: "Da prevenção ao tratamento, acompanhamos cada etapa da saúde do seu pet com responsabilidade.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream-dark/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              align="left"
              eyebrow="Por que a GranPet"
              title="Tratamos seu pet como parte da família"
              description="Unimos estética animal e cuidado veterinário em um só lugar, para que você não precise procurar em mais de um endereço."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-700 text-black">
                      <Icon />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-semibold text-ink">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink-light">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
              <Image
                src="/images/granpet-maya.jpeg"
                alt="Pet cuidado na GranPet"
                width={520}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-black px-5 py-4 shadow-xl sm:block">
              <p className="text-gradient-gold font-display text-lg font-semibold">
                +Cuidado
              </p>
              <p className="text-xs text-cream/60">a cada visita</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
