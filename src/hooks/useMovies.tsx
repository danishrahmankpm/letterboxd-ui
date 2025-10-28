import { useEffect, useState } from "react";
import type { Movie } from "../components/MoviePage";
import axios from "axios";

export default function useMovies(){
    const [movies,setMovies]=useState<Movie[]>([]);
    useEffect(()=>{
        const fetchMovies=async()=>{
            try{
                const response=await axios.get("https://api.example.com/movies",{})
                setMovies(response.data.movies);
            }
            catch(error){
                console.log("Error fetching movies:",error);
            }
        }
        fetchMovies();
    },[]);
    return movies;
}