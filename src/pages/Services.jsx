import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import FadeIn from "../components/ui/FadeIn";
import Button from "../components/ui/Button";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="From event strategy to post-event analytics, see how Kelsey Johnston supports brands through every stage of global marketing events."
      />

      <Section bg="navy" className="pt-28 md:pt-36" containerClassName="py-0 pb-20 md:pb-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Services
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold md:text-5xl">
            Support for every stage of your event
          </h1>
          <p className="mt-6 max-w-xl text-cream/80">
            Whether you need a single specialist or a full production
            partner, here&rsquo;s where I add the most value.
          </p>
        </FadeIn>
      </Section>

      <Section bg="cream">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <FadeIn key={title} delay={index * 0.06}>
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

        <FadeIn delay={0.2} className="mt-16 text-center">
          <p className="text-charcoal/70">
            Not sure which service fits your event?
          </p>
          <div className="mt-4">
            <Button to="/contact">Let&rsquo;s Figure It Out Together</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
