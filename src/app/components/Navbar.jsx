import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed flex items-center justify-center gap-6 h-24 bg-blue-600/50 w-screen backdrop-blur-3xl">
            <Link href="/movies/1" className="flex items-center justify-center
            p-4 h-12 bg-white font-bold rounded-md shadow-white-50 shadow-md
            hover:bg-gray-500 hover:text-white duration-300">Carregar filmes</Link>
            <Link href="/moviesDelay/1" className="flex items-center justify-center
            p-4 h-12 bg-blue-400 font-bold rounded-md shadow-white-50 shadow-md
            hover:bg-gray-500 hover:text-white duration-300">Carregar filmes(3s)</Link>
            <Link href="/moviesError" className="flex items-center justify-center
            p-4 h-12 bg-red-500 font-bold rounded-md shadow-white-50 shadow-md
            hover:bg-gray-500 hover:text-white duration-300">Carregar filmes(com erro)</Link>
        </div>
    )
}