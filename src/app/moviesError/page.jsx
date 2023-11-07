import { Suspense } from "react";

import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";

export default function moviesError() {
    return (
        <div className="flex flex-col items-center pt-24">
            <Suspense fallback={<Loading />}>
                <MoviesList delay={2000} shouldError={true}/>
            </Suspense>
        </div>
    )
}