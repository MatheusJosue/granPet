const whatsappNumber = "5511915012443";
const address =
  "Rua Prudente de Moraes, 1430, Centro, Jundiaí - SP, 13201-004";

// Resolution order: explicit override -> Vercel's assigned production domain
// (auto-updates once a custom domain is attached) -> local dev fallback.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "GranPet",
  tagline: "Pet Shop e Centro Veterinário",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  phoneDisplay: "(11) 91501-2443",
  instagramHandle: "@granpet.oficial",
  instagramUrl: "https://www.instagram.com/granpet.oficial/",
  email: "granpet2026@gmail.com",
  address,
  addressShort: "Rua Prudente de Moraes, 1430 - Centro, Jundiaí - SP",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address),
  hours: [
    { dias: "Terça a Sexta", horario: "8h às 17h" },
    { dias: "Sábado", horario: "8h às 12h" },
    { dias: "Domingo e Segunda", horario: "Fechado" },
  ],
};

export function whatsappLink(message: string) {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
