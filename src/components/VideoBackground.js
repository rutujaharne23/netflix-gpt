import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer({ movieId });

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        auto
        allowFullScreen
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>
    </div>
  );
};
