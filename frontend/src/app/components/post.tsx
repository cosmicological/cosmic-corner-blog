import { VscChromeClose } from "react-icons/vsc";

export default function Post() {
  return (
    <div className="flex flex-col bg-white items-center rounded-2xl max-w-11/12 w-full h-60 text-black justify-between p-4">
      <div className="flex flex-row justify-center w-full relative">
        <h2 className="font-bold text-2xl">Title of Post</h2>
        <VscChromeClose className="absolute top-0 right-0 text-red-800 size-5" />
      </div>
      <p>Desciption of Post</p>
      <div className="flex flex-row w-full justify-between">
        <p>Creation Time of Post</p>
        <p></p>
        <p>Author of Post</p>
      </div>
    </div>
  );
}
