import axios from "axios";
import {  useEffect, useState } from "react";
import type { Movie } from "../components/MoviePage";

export default function useMovie(id:string):Movie | null{
    const[movie,setMovie]=useState<Movie | null>(null);
    useEffect(()=>{
        const fetchMovie=async()=>{
            try{
                const response=await axios.get(`https://api.example.com/movies/${id}`,{});
                setMovie(response.data.movie);  
            }
            catch(error){
                console.log("Error fetching movie:",error);
            }
        };
        fetchMovie();
    },[id]);
    return movie;
}