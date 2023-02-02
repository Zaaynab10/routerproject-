import MyListMovies from "../movies"

export default function DisplayTakeYourPills(){
const movies=MyListMovies()
    return (
        <div>
          <div>{movies[4].description}</div>
        <div>{movies[4].trailer}</div>
        <div>{movies[4].button}</div>
        </div>
    )
}