import { useDispatch } from "react-redux";
import "./favoriteToogleButton.css";
import { memo } from "react";
import { toggleLike } from "../../../app/features/movies/moviesSlice";

interface FavoriteToogleButtonProps {
    id: number;
    isLike: boolean;
}

export const FavoriteToogleButton = memo(
    ({ id, isLike }: FavoriteToogleButtonProps) => {
        const dispatch = useDispatch();

        const handleLikeMovie = (id: number) => {
            dispatch(toggleLike(id));
        };

        return (
            <button
                onClick={() => handleLikeMovie(id)}
                aria-label="add to favorites"
                className={`FavoriteToogleButton__image ${
                    isLike
                        ? "FavoriteToogleButton__image_active"
                        : "FavoriteToogleButton__image_no-active"
                }`}
            />
        );
    }
);
