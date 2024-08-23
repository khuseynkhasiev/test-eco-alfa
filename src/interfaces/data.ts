interface ICountry {
    name: string;
}

interface IGenre {
    name: string;
}

interface IRating {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

interface IVotes {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

interface IPoster {
    previewUrl: string;
    url: string;
}

export interface IMovie {
    ageRating: null;
    alternativeName: string;
    countries: ICountry[];
    description: null | string;
    enName: null | string;
    genres: IGenre[];
    id: number;
    isSeries: boolean;
    movieLength: number;
    name: null | string;
    rating: IRating;
    ratingMpaa: null | string;
    seriesLength: null | number;
    shortDescription: null | string;
    status: null | string;
    ticketsOnSale: boolean;
    top10: null | number;
    top250: null | number;
    totalSeriesLength: null | number;
    type: string;
    typeNumber: number;
    votes: IVotes;
    year: number;
    poster?: IPoster;
    isLike?: boolean;
}

export interface IMovieResponse {
    docs: IMovie[];
    limit: number;
    page: number;
    pages: number;
    total: number;
}
