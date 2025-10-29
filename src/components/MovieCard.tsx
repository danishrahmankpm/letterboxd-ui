import { Link } from "react-router-dom";

type MovieCardProps = {
    id:number
    title:string,
    release_date:string,
    poster_path:string
}
export default function MovieCard(movieCardProps:MovieCardProps){
    const {title,release_date,poster_path,id}=movieCardProps;
    
    return <div className="w-[60%] sm:w-[50%] md:w-[22.5%] min-w-[150px] bg-[#941b0c] rounded-lg overflow-hidden text-left pb-2.5 flex flex-col cursor-pointer  hover:opacity-55">
            <Link to={`/movie/${id}`}>
                <img src={poster_path} alt={`${title} poster`} />
                
            </Link>
        </div>
    
}