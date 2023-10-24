import getMovies from "../../../util/getMovies";

import MoviesList from "../components/MoviesList";

export default async function Movies() {
    const movies = await getMovies(0, false);
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-white text-3xl m-6">Filmes carregados</h1>
            <MoviesList results={movies.results}/>
        </div>
    )
}