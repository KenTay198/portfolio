import aboutContent from "src/dictionaries/about.content";

function About({ params }: { params: { lang: string } }) {
  const dictionary = aboutContent[params.lang as keyof object];

  return <div>{dictionary?.title}</div>;
}

export default About;
