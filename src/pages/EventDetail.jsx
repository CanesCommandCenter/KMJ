import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import FadeIn from "../components/ui/FadeIn";
import Button from "../components/ui/Button";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import { events } from "../data/events";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <>
      <SEO title={event.title} description={event.summary} />

      <Section bg="navy" className="pt-28 md:pt-36" containerClassName="py-0 pb-16 md:pb-20">
        <FadeIn>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cream/70 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all events
          </Link>
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold">
            <MapPin className="h-3.5 w-3.5" />
            {event.location} &middot; {event.year}
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
            {event.title}
          </h1>
          <p className="mt-6 max-w-2xl text-cream/80">{event.summary}</p>
        </FadeIn>
      </Section>

      <Section bg="cream">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr]">
          <FadeIn>
            <PlaceholderImage
              label={`${event.title} — photo placeholder`}
              aspect="aspect-[4/3]"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-semibold text-navy">Highlights</h2>
            <ul className="mt-6 space-y-4">
              {event.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" />
                  <span className="text-charcoal/80">{detail}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-16 text-center">
          <Button to="/contact">Let&rsquo;s Connect</Button>
        </FadeIn>
      </Section>
    </>
  );
}
