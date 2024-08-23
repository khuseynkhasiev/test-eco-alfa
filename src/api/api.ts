const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const getResponse = (res: Response) => {
    return res.ok ? res.json() : Promise.reject(`${res.status}`);
};

export const getMovies = (limit: number, page: number) => {
    const notNullFields = [
        "id",
        "description",
        "name",
        "year",
        "rating.imdb",
        "poster.url",
        "genres.name",
    ];

    const url = new URL(`${BASE_URL}/v1.4/movie`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());
    notNullFields.forEach((field) => {
        url.searchParams.append("notNullFields", field);
    });

    return fetch(url.toString(), {
        headers: {
            "X-API-KEY": `${API_KEY}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => getResponse(response))
        .then((data) => data);
};

export const getMovieId = (id: string) => {
    const url = new URL(`${BASE_URL}/v1.4/movie`);
    url.searchParams.append("id", id);

    return fetch(url.toString(), {
        headers: {
            "X-API-KEY": `${API_KEY}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => getResponse(response))
        .then((data) => data);
};
