import MyListMovies from "../movies"

export default function DisplayPhoneBoot(){
const movies=MyListMovies()
    return (
        <div>
         <div>{movies[5].description}</div>
        <div>{movies[5].trailer}</div>
        <div>{movies[5].button}</div>
        </div>
    )
}