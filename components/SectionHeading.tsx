import { FaPaw } from "react-icons/fa";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
        <FaPaw />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-semibold sm:text-4xl ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-cream/65" : "text-ink-light"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
