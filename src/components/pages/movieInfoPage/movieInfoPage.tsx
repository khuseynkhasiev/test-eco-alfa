import { useParams } from "react-router-dom";
import "./movieInfoPage.css";
import { useEffect, useState } from "react";
import * as api from "../../../api/api";
import { IMovie } from "../../../interfaces/data";
import { MainTemplate } from "../../templates/mainTemplate/mainTemplate";
import { CircularIndeterminate } from "../../atoms/preloader/circularIndeterminate";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
export const MovieInfoPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState<IMovie>();
    const [error, setError] = useState({
        message: "",
        show: false,
    });

    const { id } = useParams<{ id: string }>();
    const movies = useSelector((state: RootState) => state.movies);

    const getMovieId = (id: string, movies: any) => {
        return movies.currentMovies.find(
            (movie: IMovie) => movie.id === parseInt(id)
        );
    };

    const fetchMovieId = (id: string) => {
        setIsLoading(true);
        setError({ message: "", show: false });
        if (id) {
            api.getMovieId(id)
                .then((data) => {
                    setMovie(data.docs[0]);
                })
                .catch((error) => {
                    if (error instanceof Error) {
                        setError({
                            message: `Ошибка получения фильма: ${error.message}`,
                            show: true,
                        });
                    } else {
                        setError({
                            message: "Произошла неизвестная ошибка",
                            show: true,
                        });
                    }
                })
                .finally(() => setIsLoading(false));
        }
    };

    useEffect(() => {
        if (id) {
            const movie = getMovieId(id, movies);
            if (movie) {
                setMovie(movie);
            } else {
                fetchMovieId(id);
            }
        }
    }, [id]);
    return (
        <MainTemplate>
            <section className="FilmInfoPage">
                {error.show ? (
                    <p className="FilmInfoPage__error">{error.message}</p>
                ) : isLoading ? (
                    <CircularIndeterminate />
                ) : (
                    <>
                        {movie?.poster?.url && (
                            <img
                                className="FilmInfoPage__poster"
                                src={movie.poster.url}
                                alt={movie.name || ""}
                            />
                        )}
                        <h1>Название: {movie?.name}</h1>
                        <p>Описание: {movie?.description}</p>
                        <p>Дата выхода: {movie?.year}</p>
                        <p>Рейтинг: {movie?.rating.imdb}</p>
                        <ol>
                            <p>Список жанров:</p>
                            {movie?.genres.map((genre, index) => (
                                <li
                                    className="FilmInfoPage__genre-item"
                                    key={index}
                                >
                                    {genre.name}
                                </li>
                            ))}
                        </ol>
                    </>
                )}
            </section>
        </MainTemplate>
    );
};
