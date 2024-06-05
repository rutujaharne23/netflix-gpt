import { CDN_IMAGE_URL } from "../utils/constants";

export const MovieCard = ({posterPath}) => {
    return (
        <div className="w-56 pr-2">
            <img alt="movieCard" src={CDN_IMAGE_URL+posterPath} />
        </div>
    );
}