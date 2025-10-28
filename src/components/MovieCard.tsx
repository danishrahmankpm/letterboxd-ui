import { Link } from "react-router-dom";

type MovieCardProps = {
    id:string
    title:string,
    year:number,
    posterUrl:string
}
export default function MovieCard(movieCardProps:MovieCardProps){
    const {title,year,posterUrl}=movieCardProps;
    return <div className="flex flex-col justify-center items-center bg-gray-800">
            <Link to={`/article/${title}`}>
                <img src={posterUrl} alt={`${title} poster`} />
                <h2>{title}</h2>
                <p>{year}</p>
            </Link>
        </div>
    
}