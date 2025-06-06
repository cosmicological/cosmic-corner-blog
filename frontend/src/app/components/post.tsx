export default function Post() {
  return (
    <div className="flex flex-col bg-white items-center rounded-2xl max-w-11/12 w-full h-60 text-black justify-between p-4">
      <h2 className="font-bold text-2xl">Title of Post</h2>
      <p>Desciption of Post</p>
      <div className="flex flex-row w-full justify-between">
        <p>Creation Time of Post</p>
        <p></p>
        <p>Author of Post</p>
      </div>
    </div>
  );
}
