import { useEffect, useState } from "react";
import type { Movie } from "../components/MoviePage";
import axios from "axios";

export default function useMovies(){
    const [movies,setMovies]=useState<Movie[]>([]);
    useEffect(()=>{
        const fetchMovies=async()=>{
            try{
                const response=await axios.get("https://api.themoviedb.org/3/movie/popular",{params:{language:"en-us",page:1,api_key:"9ad65dc78032dafb93a33fd0c77710d6"}})
                setMovies(response.data.results);
            }
            catch(error){
                console.log("Error fetching movies:",error);
            }
        }
        fetchMovies();
    },[]);
    return movies;
}