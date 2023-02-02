import MyListMovies from "../movies"

export default function DisplayViolentNight(){
const movies=MyListMovies()
    return (
        <div>
        <div>{movies[3].description}</div>
        <div>{movies[3].trailer}</div>
        <div>{movies[3].button}</div>
        </div>
    )
}