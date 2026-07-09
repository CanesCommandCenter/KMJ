import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import SEO from "../components/layout/SEO";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import FadeIn from "../components/ui/FadeIn";
import LinkedInIcon from "../components/ui/LinkedInIcon";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      // No access key configured yet — see README for setup instructions.
      console.warn(
        "Web3Forms access key is not set. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New contact form message from ${form.name}`,
          from_name: "Kelsey Johnston Portfolio",
          ...form,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Kelsey Johnston about global marketing and events opportunities."
      />

      <Section bg="navy" className="pt-28 md:pt-36" containerClassName="py-0 pb-20 md:pb-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold md:text-5xl">
            Let&rsquo;s talk about what&rsquo;s next.
          </h1>
          <p className="mt-6 max-w-xl text-cream/80">
            Tell me a bit about the opportunity and I&rsquo;ll get back to
            you within 24 hours.
          </p>
        </FadeIn>
      </Section>

      <Section bg="cream">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.2fr_1fr]">
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="Tell me about your event..."
                />
              </div>

              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>

              {status === "success" && (
                <p className="text-sm font-medium text-green-700">
                  Thanks for reaching out — I&rsquo;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-700">
                  Something went wrong sending your message. Please email me
                  directly at kmjohnston92@gmail.com instead.
                </p>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-navy">
                  Direct Contact
                </h2>
                <div className="mt-4 space-y-3">
                  <a
                    href="mailto:kmjohnston92@gmail.com"
                    className="flex items-center gap-3 text-charcoal/80 hover:text-navy"
                  >
                    <Mail className="h-5 w-5 text-gold-dark" />
                    kmjohnston92@gmail.com
                  </a>
                  <a
                    href="tel:+17144693723"
                    className="flex items-center gap-3 text-charcoal/80 hover:text-navy"
                  >
                    <Phone className="h-5 w-5 text-gold-dark" />
                    (714) 469-3723
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-navy">Connect</h2>
                <a
                  href="https://www.linkedin.com/in/kjohnston-marketing-pr/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block"
                >
                  <Button variant="outline">
                    <LinkedInIcon className="h-4 w-4" /> LinkedIn Profile
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
