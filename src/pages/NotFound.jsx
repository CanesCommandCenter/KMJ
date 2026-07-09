import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import FadeIn from "../components/ui/FadeIn";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <Section bg="navy" className="flex min-h-[70vh] items-center pt-20">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-cream/80">
            The page you&rsquo;re looking for doesn&rsquo;t exist.
          </p>
          <div className="mt-8">
            <Button to="/">Back to Home</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
