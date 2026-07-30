import type { Metadata } from "next";
import { FaBath, FaStethoscope, FaSyringe } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import ServiceSection from "@/components/ServiceSection";
import PricingExplorer from "@/components/PricingExplorer";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Banho e tosa, vacinas e clínica veterinária completa na GranPet, em Jundiaí - SP. Confira os serviços e a tabela de valores.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossos Serviços"
        title="Banho, tosa e cuidado veterinário completo"
        description="Tudo o que o seu pet precisa, em um só endereço no Centro de Jundiaí."
      />

      <ServiceSection
        id="banho-e-tosa"
        icon={FaBath}
        eyebrow="Estética Animal"
        title="Banho e Tosa"
        description="Banho, tosa higiênica, tosa na tesoura ou máquina, hidratação e muito mais — para todos os portes e tipos de pelagem, com pacotes mensais e quinzenais para quem quer economizar."
        image={{ src: "/images/depois15.jpeg", alt: "Pet após banho e tosa" }}
        whatsappMessage="Olá! Gostaria de agendar um banho e tosa na GranPet."
        bullets={[
          "Banho para pelo curto, longo, sub-pelo e gatos",
          "Tosa higiênica, na tesoura e na máquina",
          "Tosa trimming especializada para Golden Retriever",
          "Hidratação (Flash, Hidra Luxo, Pro-Volume, Sense, Liso, Detox, William)",
          "Remoção de nós e desembolo de pelo",
          "Corte de unhas e banho de ozônio terapêutico",
          "Pacotes mensais e quinzenais com condições especiais",
        ]}
      >
        <div>
          <SectionHeading
            eyebrow="Tabela de valores"
            title="Consulte o valor por porte e pelagem"
            description="Os valores variam conforme o peso e o tipo de pelagem do seu pet. Para um orçamento exato, fale com a gente pelo WhatsApp."
          />
          <div className="mt-10">
            <PricingExplorer />
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        id="vacinas"
        icon={FaSyringe}
        eyebrow="Prevenção"
        title="Vacinas e Prevenção"
        description="Manter a vacinação e a prevenção em dia é o cuidado mais importante para a saúde e a longevidade do seu pet."
        image={{ src: "/images/antes9.jpeg", alt: "Pet saudável e vacinado" }}
        whatsappMessage="Olá! Gostaria de saber mais sobre vacinas e prevenção para o meu pet."
        reverse
        tint
        bullets={[
          "Vacinação para cães e gatos (múltipla, antirrábica e outras)",
          "Vermifugação",
          "Controle de pulgas e carrapatos",
          "Check-up preventivo e orientação sobre o calendário vacinal",
        ]}
      />

      <ServiceSection
        id="clinica-veterinaria"
        icon={FaStethoscope}
        eyebrow="Saúde"
        title="Clínica Veterinária"
        description="Consultas e acompanhamento clínico para cuidar da saúde do seu pet em todas as fases da vida, com atenção individual em cada consulta."
        image={{ src: "/images/depois9.jpeg", alt: "Pet em consulta veterinária" }}
        whatsappMessage="Olá! Gostaria de agendar uma consulta veterinária."
        bullets={[
          "Consultas clínicas gerais",
          "Exames e diagnósticos",
          "Orientação nutricional",
          "Acompanhamento de rotina e preventivo",
        ]}
      />

      <CtaBand />
    </>
  );
}
