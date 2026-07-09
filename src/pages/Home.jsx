import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import FadeIn from "../components/ui/FadeIn";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import { expertise } from "../data/expertise";
import { events } from "../data/events";
import { testimonials } from "../data/testimonials";
import headshot from "../assets/images/kelsey-headshot.jpg";

export default function Home() {
  const featuredEvents = events.slice(0, 3);
  const testimonial = testimonials[0];

  return (
    <>
      <SEO
        title="Global Marketing Events Specialist"
        description="Kelsey Johnston plans, produces, and activates global marketing events that turn big ideas into unforgettable experiences."
      />

      {/* Hero */}
      <Section bg="navy" className="pt-28 md:pt-36" containerClassName="py-0 pb-24 md:pb-32">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Global Marketing Events Specialist
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-6xl">
            Kelsey Johnston
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            I plan, produce, and activate marketing events that turn ambitious
            ideas into experiences audiences remember, from the first
            sponsor call to the final wrap.
          </p>
          <div className="mt-10">
            <Button to="/contact">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* About teaser */}
      <Section bg="cream">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <FadeIn direction="right">
            <img
              src={headshot}
              alt="Portrait of Kelsey Johnston"
              className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover shadow-lg"
            />
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              About Kelsey
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
              Marketing and event strategy grounded in real production
              experience.
            </h2>
            <p className="mt-5 text-charcoal/80">
              From producing film festival programming to leading trade show
              activations for an international audience, I&rsquo;ve spent my
              career in the details that make an event actually work:
              contracts, vendors, timelines, and the people in the room.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold"
            >
              More about my background <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* Expertise */}
      <Section bg="creamDark">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            What I Do
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">
            Areas of Expertise
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ icon: Icon, title, description }, index) => (
            <FadeIn key={title} delay={index * 0.08}>
              <Card className="h-full">
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70">{description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Featured events */}
      <Section bg="cream">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Selected Work
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
                Featured Events
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-semibold text-navy hover:text-gold"
            >
              View all events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredEvents.map((event, index) => (
            <FadeIn key={event.slug} delay={index * 0.08}>
              <Link to={`/events/${event.slug}`} className="group block">
                <PlaceholderImage label={`${event.title} — photo placeholder`} />
                <h3 className="mt-4 text-lg font-semibold text-navy group-hover:text-gold">
                  {event.title}
                </h3>
                <p className="text-sm text-charcoal/60">{event.location}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Testimonial snippet */}
      <Section bg="navy">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-8 w-8 text-gold" />
          <p className="mt-6 font-display text-2xl leading-relaxed md:text-3xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold">
            {testimonial.name} &middot; {testimonial.title}, {testimonial.company}
          </p>
          <Link
            to="/testimonials"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cream/80 hover:text-gold"
          >
            Read more testimonials <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </Section>
    </>
  );
}
