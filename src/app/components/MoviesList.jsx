"use client";

import Image from "next/image";

export default function MoviesList({ page, results }) {
    results.map((movie) => console.log(movie))

    return (
        <div className="flex flex-col gap-12">
        {results.map((movie) => {
            return(
            <div 
            className="flex flex-col gap-4 bg-slate-700 rounded-lg items-center justify-center font-bold
            text-3xl p-4">
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