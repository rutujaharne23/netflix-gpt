export const VideoTitle = ({ title, overview }) => {
    return (
      <div className="absolute top-1/2 left-16 w-1/3 text-white z-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="line-clamp-3 text-m pt-5">{overview}</p>
        <div className="flex pt-4">
          <button className="bg-white text-black px-3 py-1 flex items-center mr-4 text-lg font-semibold rounded-sm hover:bg-opacity-80">
            <span className="mr-2">&#11208;</span> Play Now
          </button>
          <button className="bg-gray-800 bg-opacity-50 text-white px-4 py-2 flex items-center border border-transparent hover:bg-opacity-75 text-lg font-semibold rounded-sm">
            <span className="mr-2">&#9432;</span> More Info
          </button>
        </div>
      </div>
    );
  };
  