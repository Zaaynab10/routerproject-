import MyListMovies from "../movies"

export default function DisplayHooneymoon(){
const movies=MyListMovies()
    return (
        <div>
         <div>{movies[1].description}</div>
        <div>{movies[1].trailer}</div>
        <div>{movies[1].button}</div>
        </div>
    )
}