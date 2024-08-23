import { useDispatch } from "react-redux";
import "./deleteMovieBtn.css";
import { memo } from "react";
import { deleteMovieById } from "../../../app/features/movies/moviesSlice";

interface DeleteMovieBtnProps {
    id: number;
}

export const DeleteMovieBtn = memo(({ id }: DeleteMovieBtnProps) => {
    const dispatch = useDispatch();

    const handleDeleteCard = (id: number) => {
        dispatch(deleteMovieById(id));
    };

    return (
        <button
            onClick={() => handleDeleteCard(id)}
            aria-label="delete movie"
            className={"DeleteMovieBtn"}
        />
    );
});
