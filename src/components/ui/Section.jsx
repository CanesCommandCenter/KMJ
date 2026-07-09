const backgrounds = {
  cream: "bg-cream",
  creamDark: "bg-cream-dark",
  navy: "bg-navy text-cream",
  white: "bg-white",
};

export default function Section({
  id,
  children,
  bg = "cream",
  className = "",
  containerClassName = "",
}) {
  return (
    <section id={id} className={`${backgrounds[bg]} ${className}`}>
      <div className={`mx-auto max-w-6xl px-6 py-20 md:py-28 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
