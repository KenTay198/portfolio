import Layout from "components/Layout/Layout";
import React from "react";
import { useRouter } from "next/router";
import content from "locales/about.content";

const AboutPage = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  return (
    <Layout>
      <h1>{pageContent.title}</h1>
      <ul>
        {pageContent.presentation.map(({ label, value }, index) => (
          <li key={`presentation-${index}`}>
            {label} : {value}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default AboutPage;
