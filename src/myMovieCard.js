
import myImage1 from "./myImage/myImage.jpg"
import myImage2 from "./myImage/myImage2.jpg"
import myImage3 from "./myImage/myImage3.jpg"
import myImage4 from "./myImage/myImage4.jpg"
import myImage5 from "./myImage/myImage5.jpg"
import myImage6 from "./myImage/myImage6.jpg"
import { useNavigate } from "react-router-dom"
export default function MyMovieCard (){
 const navigate=useNavigate()
 const myMovieCard =[
{image: <div><img style={{width:"380px", height:"370px"}} src={myImage1}/></div>,
title: <div>High Heat</div> ,
 button: <button style={{backgroundColor:"yellow"}} onClick={()=>{navigate("/HighHeat")}} >More Details</button>,
},
{
image:<div> <img style={{width:"380px", height:"370px"}} src={myImage2}/> </div>,
title: "Hooneymoon"  ,
button: <button style={{backgroundColor:"yellow"}} onClick={()=>{navigate("/Hooneymoon")}} >More Details</button>
},
{
image:<div><img style={{width:"380px", height:"370px"}} src={myImage3}/></div>,
title:"Ashgrove"  ,
button:<button style={{backgroundColor:"yellow"}} onClick={()=>{navigate("/Ashgrove")}} >More Details</button>
},
{
image:<div><img style={{width:"380px", height:"370px"}} src={myImage4}/></div>,
title: "Violent Night"  ,
button: <button style={{backgroundColor:"yellow"}} onClick={()=>{navigate("/ViolentNight")}}  >More Details</button>
},
{
 image:<div><img style={{width:"380px", height:"370px"}} src={myImage5}/></div>,
 title: "Take Your Pills: Xanax"  ,
 button: <button  style={{backgroundColor:"yellow"}}onClick={()=>{navigate("/TakeYourPills")}}>More Details</button>
},
{
 image:<div><img style={{width:"380px", height:"370px"}} src={myImage6}/></div>,
 title: "Phone Boot"  ,
 button: <button style={{backgroundColor:"yellow"}} onClick={()=>{navigate("/PhoneBoot")}} >More Details</button>
},
 ]
    return myMovieCard
}