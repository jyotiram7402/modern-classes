import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <Reveal
      className={
        center ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-lg mt-5">{title}</h2>
      {description && <p className="lead mt-4">{description}</p>}
    </Reveal>
  );
}
