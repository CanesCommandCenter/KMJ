import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-gold text-navy hover:bg-gold-light focus-visible:outline-gold",
  secondary:
    "bg-transparent border border-cream text-cream hover:bg-cream hover:text-navy focus-visible:outline-cream",
  outline:
    "bg-transparent border border-navy text-navy hover:bg-navy hover:text-cream focus-visible:outline-navy",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
