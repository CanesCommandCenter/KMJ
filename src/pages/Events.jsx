import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import FadeIn from "../components/ui/FadeIn";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import { events } from "../data/events";

export default function Events() {
  return (
    <>
      <SEO
        title="Events"
        description="Explore Kelsey Johnston's portfolio of marketing events and production work, from film festivals to international trade shows."
      />

      <Section bg="navy" className="pt-28 md:pt-36" containerClassName="py-0 pb-20 md:pb-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Portfolio
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold md:text-5xl">
            Selected Events & Case Studies
          </h1>
          <p className="mt-6 max-w-xl text-cream/80">
            Real event photography where available &mdash; remaining
            placeholders are sized to drop in real photos without breaking
            the layout.
          </p>
        </FadeIn>
      </Section>

      <Section bg="cream">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {events.map((event, index) => (
            <FadeIn key={event.slug} delay={index * 0.08}>
              <Link to={`/events/${event.slug}`} className="group block">
                {event.coverPhoto ? (
                  <img
                    src={event.coverPhoto}
                    alt={event.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full rounded-xl object-cover"
                  />
                ) : (
                  <PlaceholderImage
                    label={`${event.title} — photo placeholder`}
                    aspect="aspect-[16/10]"
                  />
                )}
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location} &middot; {event.year}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-navy group-hover:text-gold-dark">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70">
                    {event.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold-dark">
                    View case study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
