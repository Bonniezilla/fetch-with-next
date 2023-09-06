import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/movies" className="flex items-center justify-center
      p-4 h-12 bg-white font-bold rounded-md shadow-white-50 shadow-md
      hover:bg-gray-500 hover:text-slate-300 duration-300">Carregar filmes</Link>
    </main>
  )
}
