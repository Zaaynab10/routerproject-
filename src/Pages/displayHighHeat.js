import MyListMovies from "../movies"

export default function DisplayHighHeat(){
const movies=MyListMovies()
    return (
        <div>
        <div>{movies[0].description}</div>
        <div>{movies[0].trailer}</div>
        <div>{movies[0].button}</div>
        </div>
    )
}