const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[15%] px-4 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-2 text-md md:w-3/4">{overview}</p>
        <div className="my-4 md:m-0">
          <button className=" bg-white text-black py-1 md:py-2 px-1 md:px-5 text-xl  rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="hidden md:inline-block py-2 px-2 m-2 bg-gray-500 text-white text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;