import { FaPaw } from "react-icons/fa";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-noise-gold relative overflow-hidden bg-black py-24 text-center sm:py-28">
      <FaPaw
        className="paw-print animate-float"
        style={{ top: "18%", left: "8%", fontSize: 46, ["--rot" as string]: "-14deg" }}
      />
      <FaPaw
        className="paw-print animate-float"
        style={{ top: "60%", right: "10%", fontSize: 58, animationDelay: "1.2s", ["--rot" as string]: "12deg" }}
      />

      <div className="relative mx-auto max-w-3xl px-5">
        <span className="eyebrow eyebrow-dark">
          <FaPaw />
          {eyebrow}
        </span>
        <h1 className="text-gradient-gold mt-5 font-display text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/65">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
