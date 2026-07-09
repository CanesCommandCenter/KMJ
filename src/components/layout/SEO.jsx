import { Helmet } from "react-helmet-async";

const SITE_NAME = "Kelsey Johnston";
const DEFAULT_DESCRIPTION =
  "Kelsey Johnston is a Global Marketing Events Specialist helping brands plan, produce, and activate unforgettable experiences from concept to close.";

export default function SEO({ title, description = DEFAULT_DESCRIPTION }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Global Marketing Events Specialist`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
