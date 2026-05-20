type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={
          inverse
            ? "text-sm font-black uppercase tracking-normal text-[var(--ese-sky)]"
            : "text-sm font-black uppercase tracking-normal text-[var(--ese-blue)]"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          inverse
            ? "mt-4 text-4xl font-black leading-tight text-white md:text-5xl"
            : "mt-4 text-4xl font-black leading-tight text-[var(--ese-ink)] md:text-5xl"
        }
      >
        {title}
      </h2>
      {body ? (
        <p
          className={
            inverse
              ? "mt-5 text-base leading-8 text-white/74"
              : "mt-5 text-base leading-8 text-[var(--ese-muted)]"
          }
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
