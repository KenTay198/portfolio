import Image from "next/image";
import homeContent from "@dictionaries/home.content";
import Portrait from "@images/photos/john_portrait.png";

function Home({ params }: { params: { lang: string } }) {
  const dictionary = homeContent[params.lang as keyof object];

  return (
    <div>
      <section className="flex max-[1000px]:flex-col-reverse  gap-8 justify-center items-center px-3 mx-auto">
        <div className="flex-1">
          <h1 className="max-[1000px]:text-center">
            John-Kenneth TAYLOR AFONAH
          </h1>
          <h2 className="max-[1000px]:text-center">{dictionary?.job}</h2>
          <p className="mb-2 text-justify">{dictionary.description}</p>
        </div>
        <Image
          src={Portrait}
          alt="Portrait de John-Kenneth"
          width={400}
          className="shadow-xl rounded-full"
        />
      </section>
    </div>
  );
}

export default Home;
