export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold w-1/3">{title}</h1>
      <p className="line-clamp-3 text-m pt-5 w-1/3">{overview}</p>
      <div className="my-4 md:m-0">
        <div className="flex pt-4">
          <button className="bg-white text-black px-3 py-1 flex items-center mr-4 text-lg font-semibold rounded-sm hover:bg-opacity-80">
            <span className="mr-2">&#11208;</span> Play Now
          </button>
          <button className="bg-gray-800 bg-opacity-50 text-white px-4 py-2 flex items-center border border-transparent hover:bg-opacity-75 text-lg font-semibold rounded-sm">
            <span className="mr-2">&#9432;</span> More Info
          </button>
        </div>
      </div>
    </div>
  );
};
