import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const instagramUrl = siteConfig.instagramUrl;
const email = siteConfig.email;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GranPet - Pet Shop e Centro Veterinário em Jundiaí",
    template: "%s | GranPet",
  },
  description:
    "Pet shop e centro veterinário em Jundiaí - SP. Banho e tosa, vacinas, consultas e cuidado completo para cães e gatos, com atendimento de excelência.",
  applicationName: "GranPet",
  authors: [{ name: "GranPet" }],
  creator: "GranPet",
  publisher: "GranPet",
  category: "Pet care",
  keywords: [
    "GranPet",
    "pet shop Jundiaí",
    "centro veterinário Jundiaí",
    "clínica veterinária Jundiaí",
    "banho e tosa Jundiaí",
    "veterinário Centro Jundiaí",
    "vacina para cachorro Jundiaí",
    "vacina para gato Jundiaí",
    "consulta veterinária Jundiaí",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GranPet - Pet Shop e Centro Veterinário em Jundiaí",
    description:
      "Banho e tosa, vacinas e clínica veterinária completa para cães e gatos em Jundiaí - SP.",
    url: siteUrl,
    locale: "pt_BR",
    type: "website",
    siteName: "GranPet",
    images: [
      {
        url: "/logo/granpet-logo.png",
        width: 1200,
        height: 1183,
        alt: "GranPet - Pet Shop e Centro Veterinário",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "GranPet",
  alternateName: "GranPet Pet Shop e Centro Veterinário",
  description:
    "Pet shop e centro veterinário em Jundiaí - SP, com banho e tosa, vacinas e clínica veterinária completa.",
  telephone: "+55 11 91501-2443",
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Prudente de Moraes, 1430",
    addressLocality: "Jundiaí",
    addressRegion: "SP",
    postalCode: "13201-004",
    addressCountry: "BR",
  },
  areaServed: ["Jundiaí - SP", "Centro"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  priceRange: "$$",
  url: siteUrl,
  image: `${siteUrl}/logo/granpet-logo.png`,
  sameAs: [instagramUrl],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banho e tosa" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consulta veterinária" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vacinação" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
