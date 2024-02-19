export const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function getMovies(time, shouldError, page) {
    await delay(time);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGZhOGI5NjBlYTI2MjBiZTZmOTY1YmVmYjk3NDVjZCIsInN1YiI6IjY0Zjg4ZTU4OGUyMGM1MGNkNjJhNTYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JKyhrivA_iMaLiF8UxnX7Go7Frbo0XnpSHRLciSENvQ'
        }
      };
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, options)
    if(!res.ok || shouldError) {
        throw new Error(`Ocorreu um erro: ${res.status}`)
    }
    return res.json();
}