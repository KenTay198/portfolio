import Image from "next/image";
import homeContent from "@dictionaries/home.content";
import Portrait from "@images/photos/john_portrait.png";
import Button from "@atoms/Button";

function Home({ params }: { params: { lang: string } }) {
  const dictionary = homeContent[params.lang as keyof object];

  return (
    <div>
      <section className="flex flex-wrap gap-8 justify-center items-center px-3 mx-auto">
        <div className="flex-1">
          <h1>John-Kenneth TAYLOR AFONAH</h1>
          <h2>{dictionary?.job}</h2>
          <Button
            template="secondaryAlt"
            className="font-bold text-lg"
            href="/journey"
          >
            {dictionary?.nextPage}
          </Button>
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
