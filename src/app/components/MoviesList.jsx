"use client";

import Image from "next/image";

const MoviesList = ({ page, results }) => {
    results.map((movie) => console.log(movie))

    return (
        <>
        {results.map((movie) => {
            <div>
                <h1 className="text-white">{movie.title}</h1>
                <Image 
                width={1200}
                height={1200}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                />
            </div>
        })}
        </>
    )
}

export default MoviesList;