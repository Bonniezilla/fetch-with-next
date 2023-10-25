import { Suspense } from "react";
import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";

export default function Movies() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-white text-3xl m-6">Filmes carregados</h1>
            <Suspense fallback={<Loading />}>
                <MoviesList delay={3000} shouldError={false} />
            </Suspense>
        </div>
    )
}