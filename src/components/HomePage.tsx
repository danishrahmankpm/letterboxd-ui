import { useState } from "react";
import SearchBox from "./SearchBox";
import type { Movie } from "./MoviePage";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";

export default function  HomePage(){
    const [search,setSearch]=useState<string>("");
    const movies=useMovies();

    const filteredMovies:Movie[]=movies.filter((movie)=>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="flex flex-col justify-start items-center bg-[#2B2A33] h-screen w-screen overflow-y-auto ">
        <div className="pl-7 w-full flex flex-row justify-start items-center gap-2.5 mt-5 mr-1">
              <img
                className="w-8 h-8 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
                alt="Firefox Logo"
              />
              <h1 className="text-white font-bold text-2xl">Letterboxd</h1>
        </div>
      
      <SearchBox  setSearch={setSearch} />


      <div className='flex flex-row justify-center gap-8  flex-wrap pb-5 w-[80%] '>
        {filteredMovies.map((movie,index)=>(
          <MovieCard key={index} id={movie.id} title={movie.title} posterUrl={movie.posterUrl} year={movie.year}/>))}
      </div>
      

    </div> 
    )      
}