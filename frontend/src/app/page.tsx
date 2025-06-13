"use client";

import Image from "next/image";
import Post from "./components/post";
//import { VscAdd } from "react-icons/vsc";
import { useState } from "react";
import Modal from "./components/modal";

export default function Home() {
  //const [lastLogin, setLastLogin] = useState();
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [age, setAge] = useState("25");
  const [languages, setLanguages] = useState("TODO");
  const [comment, setComment] = useState("TODO");
  const [mood, setMood] = useState("Sleepy");
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div>
      <main>
        <div className="flex flex-row justify-center p-12 gap-20">
          <div className="flex flex-col justify-center items-left self-start gap-2">
            <p className="pl-8">Today is: {currentDate}</p>
            <div className="flex flex-row gap-2">
              <Image
                className="rounded-lg"
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
                  <input
                    className="text-xl w-full"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">From:&nbsp;</p>
                  <p className="text-xl">Heidelberg, Germany</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">
                    Programming Languages:&nbsp;
                  </p>
                  <input
                    className="text-xl"
                    value={languages}
                    onChange={(e) => {
                      setLanguages(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Comment:&nbsp;</p>
                  <input
                    className="text-xl w-full"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex flex-row">
                  <p className="text-xl font-bold">Last Login:&nbsp;</p>
                  <p className="text-xl">TODO</p>
                </div>
                <button className="bg-purple-950 text-white rounded-lg px-4 py-2 mt-2">
                  Save
                </button>
              </div>
            </div>
            <div className="flex flex-row pl-20">
              <p className="text-xl font-bold">Mood:&nbsp;</p>
              <input
                className="text-xl"
                value={mood}
                onChange={(e) => {
                  setMood(e.target.value);
                }}
              ></input>
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
            <iframe
              className="rounded-xl"
              width="100%"
              height="295"
              src="https://www.youtube.com/embed/-SjPVVeNdKY?si=FK2yTGjDiKeDydZI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-5xl">Welcome to the Cosmic Corner Blog!</h1>
                <button
                  onClick={() => setAddModalOpen(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4"
                >
                  Add Post
                </button>
              </div>
              <div className="flex flex-col items-center max-w-full w-full h-[751px] gap-4 overflow-y-auto">
                <Post />
                <Post />
                <Post />
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={addModalOpen} onClose={() => setAddModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Add New Post</h2>
          <input
            type="text"
            placeholder="Title..."
            className="w-full p-2 border mb-2"
          ></input>
          <textarea
            placeholder="Description..."
            className="w-full p-2 border mb-2"
          ></textarea>
          <div>
            <button className="bg-purple-950 text-white px-4 py-2 rounded-b-lg">
              Post
            </button>
            <button className="bg-red-700 text-white px-4 py-2 rounded-b-lg">
              Cancel
            </button>
          </div>
        </Modal>
      </main>
    </div>
  );
}
