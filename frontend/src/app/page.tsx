import Image from "next/image";
import Post from "./components/post";
//import { VscAdd } from "react-icons/vsc";
//import { useState } from "react";

export default function Home() {
  //const [lastLogin, setLastLogin] = useState();
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <main>
        <div className="flex flex-row justify-center p-16 gap-20">
          <div className="flex flex-col justify-center items-left self-start gap-2">
            <p className="pl-12">Today is: {currentDate}</p>
            <div className="flex flex-row gap-2">
              <Image
                className="rounded"
                src="https://placehold.co/300x300/jpg"
                alt="Logo"
                width={300}
                height={300}
              />
              <div className="flex flex-col gap-2 pt-10">
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
                  <p className="text-xl font-bold">
                    Programming Languages:&nbsp;
                  </p>
                  <p className="text-xl">C#, Javascript, Python, SQL, Java</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Comment:&nbsp;</p>
                  <p className="text-xl">
                    And when everyones a developer... no one will be.
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Last Login:&nbsp;</p>
                  <p className="text-xl">TODO</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row pl-20">
              <p className="text-xl font-bold">Mood:&nbsp;</p>
              <p className="text-xl">Sleepy</p>
            </div>
            <iframe
              className="mt-4"
              src="https://open.spotify.com/embed/playlist/5qJpQ65Lvu9boxcBSDotSx?utm_source=generator"
              width="100%"
              height="152"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-5xl">Welcome to the Cosmic Corner Blog!</h1>
                <p>It is still a work in progress, so please bear with me.</p>
              </div>
              <div className="flex flex-col items-center max-w-full w-full h-[751px] gap-4 overflow-y-auto">
                <Post />
                <Post />
                <Post />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
