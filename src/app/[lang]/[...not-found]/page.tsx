import Image from "next/image";
import Notfound from "@images/svg/404.svg";
import notFoundContent from "@dictionaries/not-found.content";

interface IProps {
  params: {
    lang: string;
    "not-found": string[];
  };
}

function NotFound({ params }: IProps) {
  const dictionary = notFoundContent[params.lang];

  return (
    <div className="h-full flex flex-col items-center justify-center max-w-[1000px] mx-auto text-center">
      <Image src={Notfound} alt="Styled 404" />
      <h2 className="text-5xl font-bold">{dictionary?.title}</h2>
      <p className="text-2xl">{dictionary?.text}</p>
    </div>
  );
}

export default NotFound;
