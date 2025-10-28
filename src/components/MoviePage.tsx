import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
export type Movie={
    id:string;
    title:string;
    year:number;
    director:string;
    posterUrl:string;
    description:string;
    synopsis:string;
}
export default function MoviePage(){
    const id=useParams()
    const movie=useMovie(String(id)); 
    if(!movie){
        return <div className="text-white flex justify-center items-center h-screen">Loading...</div>
    }
    return (
            <div className=" flex flex-row justify-center">
                <div className="flex flex-col justify-center items-center w-[70%] gap-3 text-white">
                    <div>
                        <h1 className="text-2xl">{movie.title}</h1>
                    </div>
                    <div className="flex justify-evenly gap-3">
                        <span>{movie.year}</span>
                        <span>{movie.director}</span>
                    </div>
                    <div>
                        <img src={movie.posterUrl} alt="alt-text"></img>
                    </div>
                    <div className="mt-6">
                        <p>{movie.synopsis}</p>
                    </div>
                </div>

        </div>
    )
}