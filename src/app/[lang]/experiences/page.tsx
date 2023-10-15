import Link from "next/link";
import experiencesContent, {
  IExperience,
} from "@dictionaries/experiences.content";
import { FaSchool, FaSuitcase } from "react-icons/fa";

function Experiences({ params }: { params: { lang: string } }) {
  const dictionary = experiencesContent[params.lang];
  return (
    <div>
      <h1 className="mb-2 break-words">{dictionary?.title}</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-secondary text-primary w-fit h-fit rounded-full">
                  <FaSchool size={30} />
                </div>
                <p className="text-2xl">
                  {dictionary.categories.school.toUpperCase()}
                </p>
              </div>
            </th>
            <th>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-secondary text-primary w-fit h-fit rounded-full">
                  <FaSuitcase size={30} />
                </div>
                <p className="text-2xl">
                  {dictionary.categories.work.toUpperCase()}
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from(
            new Array(
              Math.max(dictionary.work.length, dictionary.school.length)
            ).keys()
          ).map((i) => {
            const key = `experience-${i}`;
            const work = dictionary.work[i];
            const school = dictionary.school[i];

            return (
              <tr key={key}>
                <td className="align-top relative border-r-2 border-secondary after:absolute after:right-0 after:top-0 after:w-5 after:h-5 after:bg-primary after:border-secondary after:border-[2px] after:rounded-full after:translate-x-[calc(50%+1px)]">
                  {school && <Experience {...school} index={i} />}
                </td>
                <td className="align-top">
                  {work && <Experience {...work} index={i} />}
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="border-r-2 border-secondary border-dashed h-5 pointer-events-none"></td>
          </tr>
          <tr>
            <td className="border-r-2 border-secondary border-dotted h-5 pointer-events-none"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Experience = ({
  date,
  etablissement,
  title,
  missions,
  index,
}: IExperience & { index: number }) => {
  const key = `experience-${index}`;
  return (
    <div className="flex flex-col p-5">
      <p className="font-bold max-[450px]:text-lg text-2xl text-secondaryAlt ">
        {date}
      </p>
      <p className="font-bold max-[450px]:text-lg text-2xl text-white">
        {etablissement} | {title}
      </p>
      <ul className="max-[450px]:text-base">
        {missions?.map(({ label, href }, i) => {
          if (href) {
            return (
              <Link
                target="_blank"
                className="flex text-secondaryAlt underline w-fit duration-200 hover:brightness-75"
                key={key + `-mission-${i}`}
                href={href}
              >
                <li
                  className="ml-6 list-disc w-fit"
                  key={key + `-mission-${i}`}
                >
                  {label}
                </li>
              </Link>
            );
          }
          return (
            <li className="ml-6 list-disc" key={key + `-mission-${i}`}>
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experiences;
