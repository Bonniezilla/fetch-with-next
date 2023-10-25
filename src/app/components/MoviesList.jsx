import getMovies from "../../../util/getMovies";

import Image from "next/image";

export default async function MoviesList({ delay, shouldError }) {
    const moviesFetch = await getMovies(delay, shouldError);
    const moviesList = moviesFetch.results;

    return (
        <div className="flex flex-col gap-12">
                {moviesList.map((movie) => {
                    return (
                        <div
                            className="flex flex-col gap-4 bg-slate-700 rounded-lg items-center justify-center font-bold
                            text-3xl p-4 w-full">
                            <h1 className="text-white">{movie.title}</h1>
                            <Image
                                width={800}
                                height={800}
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            />
                        </div>
                    )
                })}
        </div>

    )
}