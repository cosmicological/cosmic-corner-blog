import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-row justify-between p-16">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row">
              <Image
                src="https://placehold.co/300x350/jpg"
                alt="Logo"
                width={300}
                height={350}
              />
              <div className="flex flex-col">
                <p>Name:</p>
                <p>Age:</p>
                <p>From:</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-950 w-2"></div>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex flex-col bg-white rounded-lg w-full h-52">
              <h1 className="text-5xl">Welcome to the Cosmic Corner Blog!</h1>
              <p>It is still a work in progress, so please bear with me.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
