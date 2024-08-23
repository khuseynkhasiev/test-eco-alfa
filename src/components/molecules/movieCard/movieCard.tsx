import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IMovie } from "../../../interfaces/data";
import "./movieCard.css";
import { Link } from "react-router-dom";
import { FavoriteToogleButton } from "../../atoms/favoriteToogleButton/favoriteToogleButton";
import { DeleteMovieBtn } from "../../atoms/deleteMovieBtn/deleteMovieBtn";
export const MovieCard = ({ movie }: { movie: IMovie }) => {
    const { poster, name, rating, year, id, isLike, description } = movie;

    const renderPoster = () => {
        if (poster) {
            return (
                <CardMedia
                    sx={{ objectFit: "contain" }}
                    component="img"
                    height="140"
                    image={poster.previewUrl}
                    alt={name || ""}
                />
            );
        }
        return <div style={{ height: "140px" }}></div>;
    };

    return (
        <Card sx={{ position: "relative" }}>
            <FavoriteToogleButton
                id={id}
                isLike={typeof isLike === "undefined" ? false : isLike}
            />
            <DeleteMovieBtn id={id} />
            <Link to={`/${id}`}>
                <CardActionArea sx={{ padding: "10px" }}>
                    {renderPoster()}
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{ mb: 1.5 }}
                            component="h3"
                        >
                            {name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            sx={{ mb: 1.5 }}
                            component="p"
                        >
                            Описание: {description}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            sx={{ mb: 1.5 }}
                            component="p"
                        >
                            Год выпуска: {year}
                        </Typography>
                        <Typography
                            gutterBottom
                            color="text.secondary"
                            variant="subtitle2"
                            sx={{ mb: 1.5 }}
                            component="p"
                        >
                            Рейтинг IBM: {rating.imdb}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};
