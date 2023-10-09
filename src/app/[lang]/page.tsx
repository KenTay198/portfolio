import Image from "next/image";
import homeContent from "@dictionaries/index.content";
import Portrait from "@images/photos/john_portrait.png";

function Home({ params }: { params: { lang: string } }) {
  const dictionary = homeContent[params.lang as keyof object];

  return (
    <div>
      <section className="flex flex-wrap gap-8 justify-center items-center max-w-[1200px] px-3 mx-auto">
        <Image
          src={Portrait}
          alt="Portrait de John-Kenneth"
          width={400}
          className="drop-shadow shadow-xl rounded-full"
        />
        <div className="text-center">
          <h1 className="text-3d">John-Kenneth TAYLOR AFONAH</h1>
          <h2>{dictionary?.job}</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
