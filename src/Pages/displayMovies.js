import MyMovieCard from "../myMovieCard";
export default function DisplayMovie(){
const myMovieCard=MyMovieCard()

console.log(myMovieCard)
    return(
<div>
{ myMovieCard.map((items)=>{
    return (
    <div style={{border:"2px solid white " ,margin:"15px" , boxShadow:"10px 5px 5px red",color:"white", width:"379px",height:"434px" , lineHeight:"25px", display:"inline-block"}}>
    <div>{items.image} </div>
    <div>{items.title}</div>
    <div>{items.button} </div>
    </div>)
})}

</div>
    )
}