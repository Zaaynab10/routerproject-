import MyListMovies from "../movies"

export default function DisplayAshgrove(){
const movies=MyListMovies()
    return (
        <div>
        <div>{movies[2].description}</div>
        <div>{movies[2].trailer}</div>
        <div>{movies[2].button}</div>
        </div>
    )
}