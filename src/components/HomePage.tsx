import { useState } from "react";
import SearchBox from "./SearchBox";
import type { Movie } from "./MoviePage";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";
import logo from "../assets/logo.png"

export default function  HomePage(){
    const [search,setSearch]=useState("");
    const movies=useMovies();

    movies.forEach((movie)=>{movie.poster_path="https://image.tmdb.org/t/p/w500"+movie.poster_path});

    const filteredMovies:Movie[]=movies.filter((movie)=>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="flex flex-col justify-start items-center bg-[#081c15] h-screen w-screen overflow-y-auto ">
        <div className="pl-7 w-full flex flex-row justify-start items-center gap-2.5 mt-5 mr-1">
              <img
                className="w-8 h-8 object-contain"
                src={logo}
                alt="Firefox Logo"
              />
              <h1 className="text-white font-bold text-2xl">Letterboxd</h1>
        </div>
      
      <SearchBox  setSearch={setSearch} />


      <div className='flex flex-row justify-center gap-8  flex-wrap pb-5 w-[80%] '>
        {filteredMovies.map((movie,index)=>(
          <MovieCard key={index} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date}/>))}
      </div>
      

    </div> 
    )      
}