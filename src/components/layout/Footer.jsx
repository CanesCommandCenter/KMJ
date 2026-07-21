import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import Button from "../ui/Button";
import LinkedInIcon from "../ui/LinkedInIcon";

const links = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-cream/10 pb-12 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              Let&rsquo;s connect about what&rsquo;s next.
            </h3>
            <p className="mt-2 max-w-md text-cream/70">
              Global marketing and event strategy &mdash; open to new
              opportunities.
            </p>
          </div>
          <Button to="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold">Kelsey Johnston</p>
            <p className="mt-2 text-sm text-cream/70">
              Global Marketing Events Specialist
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-cream/70 transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <a
              href="mailto:kmjohnston92@gmail.com"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-gold"
            >
              <Mail className="h-4 w-4" /> kmjohnston92@gmail.com
            </a>
            <a
              href="tel:+19494697579"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-gold"
            >
              <Phone className="h-4 w-4" /> (949) 469-7579
            </a>
            <a
              href="https://www.linkedin.com/in/kjohnston-marketing-pr/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-gold"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <p className="text-xs text-cream/50">
          &copy; {new Date().getFullYear()} Kelsey Johnston. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
