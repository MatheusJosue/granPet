"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const photos = [
  { src: "/images/depois5.jpeg", label: "Banho e tosa com carinho" },
  { src: "/images/antes9.jpeg", label: "Atendimento individual" },
  { src: "/images/depois8.jpeg", label: "Resultado impecável" },
  { src: "/images/depois3.jpeg", label: "Pelagem saudável" },
  { src: "/images/antes3.jpeg", label: "Cuidado do início ao fim" },
  { src: "/images/depois1.jpeg", label: "Pets sempre felizes" },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nosso cuidado no dia a dia"
          title="Cada pet, um atendimento único"
          description="Fotos ilustrativas do estilo de cuidado que buscamos oferecer a cada cão e gato."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-gold-400/30 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-cream">{photo.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
