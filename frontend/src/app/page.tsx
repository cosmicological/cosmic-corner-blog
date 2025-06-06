import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-row justify-center p-16 gap-20">
          <div className="flex flex-col justify-center items-left self-start">
            <div className="flex flex-row gap-2">
              <Image
                src="https://placehold.co/300x350/jpg"
                alt="Logo"
                width={300}
                height={350}
              />
              <div className="flex flex-col gap-2 pt-3">
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Name:&nbsp;</p>
                  <p className="text-xl">Gabriel Morehead</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Age:&nbsp;</p>
                  <p className="text-xl">25</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">From:&nbsp;</p>
                  <p className="text-xl">Heidelberg, Germany</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Programming Languages:&nbsp;</p>
                  <p className="text-xl">C#, Javascript, Python, SQL, Java</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Comment:&nbsp;</p>
                  <p className="text-xl">And when everyones a developer... no one will be.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="text-xl font-bold">Mood:&nbsp;</p>
              <p className="text-xl">Sleepy</p>
            </div>
          </div>
          {/**<div className="bg-purple-950 w-2"></div>/*/}
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <h1 className="text-5xl">Welcome to the Cosmic Corner Blog!</h1>
                <p>It is still a work in progress, so please bear with me.</p>
              </div>
              <div className="bg-white rounded-2xl w-11/12 h-32"></div>
              <div className="bg-white rounded-2xl w-11/12 h-32"></div>
              <div className="bg-white rounded-2xl w-11/12 h-32"></div>
              <div className="bg-white rounded-2xl w-11/12 h-32"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
