import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {

  console.log(movies)

  return (
    movies && (<div className="px-6">
      <h1 className="text-xl pt-5 pb-3 text-white">{title}</h1>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.backdrop_path} className="inline-block" />
          ))}
        </div>
      </div>
    </div>)
  );
};
