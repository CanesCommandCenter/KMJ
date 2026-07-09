import { GraduationCap, CheckCircle2, Download } from "lucide-react";
import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import FadeIn from "../components/ui/FadeIn";
import { timeline, education, skills } from "../data/timeline";
import headshot from "../assets/images/kelsey-headshot.jpg";
import OpenToWorkBadge from "../components/ui/OpenToWorkBadge";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Kelsey Johnston's background in global marketing and event production, from festival programming to international trade shows."
      />

      {/* Bio */}
      <Section bg="navy" className="pt-28 md:pt-36" containerClassName="py-0 pb-20 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1fr)_320px]">
          <FadeIn>
            <OpenToWorkBadge />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              About Kelsey
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              A producer&rsquo;s eye for marketing that actually ships.
            </h1>
            <p className="mt-6 max-w-xl text-cream/80">
              I&rsquo;m currently a Global Marketing Events Specialist at
              Aspen Medical Products, where I plan and run corporate events,
              trade shows, and international meetings end-to-end. I got my
              start producing film festival programming and coordinating
              trade show activations for an international medical device
              brand, and I&rsquo;ve been drawn to the logistics of live
              marketing ever since.
            </p>
            <p className="mt-4 max-w-xl text-cream/80">
              I care about the details other people skip: the sponsor
              contract, the vendor timeline, the backup plan for the backup
              plan. That production discipline is what turns brand strategy
              into experiences that run smoothly and leave a lasting
              impression on everyone in the room.
            </p>
            <div className="mt-8">
              <Button href="/kelsey-johnston-resume.pdf" download variant="secondary">
                Download Resume <Download className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <img
              src={headshot}
              alt="Portrait of Kelsey Johnston"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="cream">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Career Path
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
            Milestones
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-8 border-l-2 border-navy/10 pl-8">
          {timeline.map((item, index) => (
            <FadeIn key={`${item.org}-${item.years}`} delay={index * 0.05} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-gold" />
              <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                {item.years}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-navy">
                {item.role} &middot; {item.org}
              </h3>
              <p className="text-sm text-charcoal/60">{item.location}</p>
              <p className="mt-2 max-w-2xl text-charcoal/80">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Education + Skills */}
      <Section bg="creamDark">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <FadeIn>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-gold-dark" />
              <h2 className="text-2xl font-semibold text-navy">Education</h2>
            </div>
            <div className="mt-6 space-y-6">
              {education.map((edu) => (
                <div key={edu.school}>
                  <p className="font-semibold text-navy">{edu.degree}</p>
                  <p className="text-sm text-charcoal/70">
                    {edu.school}, {edu.location} &middot; {edu.year}
                  </p>
                  {edu.note && (
                    <p className="mt-1 text-sm text-charcoal/60">{edu.note}</p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-7 w-7 text-gold-dark" />
              <h2 className="text-2xl font-semibold text-navy">
                Skills & Expertise
              </h2>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-charcoal/80"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  {skill}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
