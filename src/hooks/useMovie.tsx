import axios from "axios";
import {  useEffect, useState } from "react";
import type { Movie } from "../components/MoviePage";

export default function useMovie(id:number):Movie | null{
    const[movie,setMovie]=useState<Movie | null>(null);
    useEffect(()=>{
        const fetchMovie=async()=>{
            try{
                console.log("Fetching movie id:", id);
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                    api_key: "9ad65dc78032dafb93a33fd0c77710d6",
                    language: "en-US",
                },
            });
                console.log(response.data)
                setMovie(response.data);  
            }
            catch(error){
                console.log("Error fetching movie:",error);
            }
        };
        fetchMovie();
    },[]);
    return movie;
}