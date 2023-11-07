'use client';

import Link from "next/link";
import getMovies from "../../../util/getMovies";

import Image from "next/image";

export default async function MoviesList({ delay, shouldError }) {
    try {
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
    } catch (error) {
        console.log(error)
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
                <h1 className="text-white text-3xl">Ops! Erro encontrado!</h1>
                <Link href="/moviesError" className="flex items-center justify-center
                p-4 h-12 bg-blue-400 font-bold rounded-md shadow-white-50 shadow-md
                hover:bg-gray-500 hover:text-slate-300 duration-300">Tentar novamente</Link>
                <Link href="/" className="flex items-center justify-center
                p-4 h-12 bg-red-400 font-bold rounded-md shadow-white-50 shadow-md
                hover:bg-gray-500 hover:text-slate-300 duration-300">Voltar para o inicio</Link>

            </div>

        )
    }
}