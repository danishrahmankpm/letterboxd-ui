import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
export type Movie={
    id:number;
    title:string;
    release_date:string;
    original_language:string;
    poster_path:string;
    vote_avg:number;
    overview:string;
}
export default function MoviePage(){
    const paramsObj=useParams()
    const id=paramsObj.id
    console.log(id)
    const movie=useMovie(Number(id)); 
    if(!movie){
        return <div className="text-white flex justify-center items-center h-screen">Loading...</div>
    }
    movie.poster_path="https://image.tmdb.org/t/p/w500"+movie.poster_path;
    
    return (
        <div className="flex justify-center min-h-screen bg-[#081c15] text-gray-200 py-12 px-6">
        <div className="flex flex-col md:flex-row items-start gap-10 w-full max-w-5xl bg-[#941b0c] rounded-2xl shadow-xl p-8">
            
            {/* Poster */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <img
                src={movie.poster_path}
                alt={`${movie.title} poster`}
                className="rounded-lg shadow-lg w-[80%] md:w-full object-cover"
            />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-[white]">{movie.title}</h1>

            <div className="flex flex-row flex-wrap items-center gap-5 text-sm text-gray-400">
                <span className="bg-[#68b0ab] text-[white] px-3 py-1 rounded-full font-medium">
                {movie.original_language.toUpperCase()}
                </span>
                <span>{movie.release_date}</span>
            </div>

            <div className="border-t border-gray-700 my-3"></div>

            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>

        </div>
        </div>

    )
}