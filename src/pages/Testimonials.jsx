import { Quote } from "lucide-react";
import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import FadeIn from "../components/ui/FadeIn";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Hear what clients and colleagues say about working with Kelsey Johnston on marketing events and campaigns."
      />

      <Section bg="navy" className="pt-28 md:pt-36" containerClassName="py-0 pb-20 md:pb-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Testimonials
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold md:text-5xl">
            What people say
          </h1>
          <p className="mt-4 max-w-xl text-sm text-cream/60">
            Sample quotes shown below &mdash; swap in real client and
            colleague testimonials as they come in.
          </p>
        </FadeIn>
      </Section>

      <Section bg="cream">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.quote} delay={index * 0.06}>
              <Card className="h-full">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-4 text-charcoal/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-navy">
                  {testimonial.name}
                </p>
                <p className="text-sm text-charcoal/60">
                  {testimonial.title}, {testimonial.company}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
