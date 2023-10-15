import cvContent from "@dictionaries/cv.content";

function CV({ params }: { params: { lang: string } }) {
  const dictionary = cvContent[params.lang];
  return (
    <div>
      <h1>{dictionary.title}</h1>
      <iframe className="w-full max-w-[1300px] h-screen mx-auto" src="/documents/cv.pdf"></iframe>
    </div>
  );
}

export default CV;
