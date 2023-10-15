import journeyContent from "src/dictionaries/journey.content";

function About({ params }: { params: { lang: string } }) {
  const dictionary = journeyContent[params.lang];

  return (
    <div>
      <h1 className="mb-2">{dictionary?.title}</h1>
      <ul className="flex flex-col gap-3">
        {dictionary.presentation.map(({ Icon, description }, i) => (
          <li
            key={`presentation-${i}`}
            className={`flex items-center py-3 px-2 gap-3 rounded-lg max-[450px]:flex-col text-justify ${
              i % 2 !== 0
                ? "ml-auto bg-secondary flex-row-reverse text-primary min-[450px]:text-right"
                : "bg-primaryAlt"
            }`}
          >
            <div
              className={` rounded-full p-3 ${
                i % 2 !== 0
                  ? "text-secondaryAlt bg-primary"
                  : "text-primary bg-secondaryAlt"
              }`}
            >
              <Icon size={35} />
            </div>
            <p className="flex-1">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
