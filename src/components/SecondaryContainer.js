import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    return (
        (movies.nowPlayingMovies || movies.popularMovies || movies.topRatedMovies) && (<div className="bg-black">
            <div className="-mt-28 relative z-20 pb-10">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
            </div>
        </div>)
    );
}