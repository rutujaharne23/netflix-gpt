import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    return (
        movies.nowPlayingMovies && (<div className="bg-black">
            <div className="-mt-28 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing3"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing4"} movies={movies.nowPlayingMovies} />
            </div>
        </div>)
    );
}