import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { experimentalStyled as styled } from "@mui/material/styles";
import "./movies.css";
import { useEffect, useState } from "react";
import { setMovies } from "../../../app/features/movies/moviesSlice";
import * as api from "../../../api/api";
import Grid from "@mui/material/Grid";
import { Box, Paper } from "@mui/material";
import { MovieCard } from "../../molecules/movieCard/movieCard";
import { CircularIndeterminate } from "../../atoms/preloader/circularIndeterminate";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const Movies = () => {
    const dispatch = useDispatch();
    const { limit, page, currentMovies } = useSelector(
        (state: RootState) => state.movies
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErrror] = useState({
        message: "",
        show: false,
    });

    const fetchMovies = async (page: number) => {
        setIsLoading(true);
        try {
            const data = await api.getMovies(limit, page);
            dispatch(setMovies(data));
            setErrror({ message: "", show: false });
        } catch (error) {
            if (error instanceof Error) {
                setErrror({
                    message: `Ошибка получения списка: ${error.message}`,
                    show: true,
                });
            } else {
                setErrror({
                    message: "Произошла неизвестная ошибка",
                    show: true,
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    return (
        <section className="Movies">
            <h2 className="text-3xl	text-center	py-2">Список фильмов</h2>
            <ul className="Movies__list">
                {isLoading ? (
                    <CircularIndeterminate />
                ) : error.show ? (
                    <p>{error.message}</p>
                ) : (
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            justifyContent="center"
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            {currentMovies.map((movie) => (
                                <Grid item xs={2} sm={3} md={3} key={movie.id}>
                                    <Item>
                                        <MovieCard movie={movie} />
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </ul>
        </section>
    );
};
