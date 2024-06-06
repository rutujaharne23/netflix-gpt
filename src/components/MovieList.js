import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    movies && (<div className="pl-16">
      <h1 className="text-lg font-semibold pt-5 pb-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.backdrop_path} className="inline-block" />
          ))}
        </div>
      </div>
    </div>)
  );
};
