import { useNavigate } from "react-router-dom"
export default function MyListMovies(){
    const navigate =useNavigate()
    const myDescription={
     color:"white",
     border:"2px solid white",
     position:"relative",
     top:"200px"
    }
    const myTrailer={
        position:"relative",
        top:"220px",
    }
    const myButton={
        position:"relative",
        bottom:"205px",
        width:"120px",
        left:"720px",
        backgroundColor:"red",
        color:"white"
    }
  const myListMovies=[
    {description:<div style={myDescription}> "When the local mafia shows up to burn down her restaurant, Ana, a chef with a meticulous past, defends her turf and proves her knife skills both in and out of the kitchen."</div>,
     trailer:<div style={myTrailer} ><a style={{color:"yellow"}} href="https://t.me/bad_the_guy/775"> watch the trailer </a> </div> ,
     button:<button style={myButton} onClick={()=>{navigate("/")}} >Back to Home</button>
    },
    {description:<div style={myDescription}> "Adam and his bride, Sarah are about to embark on the romantic honeymoon of a lifetime in Venice. But when the trip is gatecrashed by Adam's best friend, Ed, it inadvertently turns their perfect lovers' holiday into a complete disaster."</div> ,
    trailer:<div style={myTrailer}><a style={{color:"yellow"}} href="https://t.me/bad_the_guy/776">  watch the trailer</a></div> ,
    button:<button style={myButton}  onClick={()=>{navigate("/")}} >Back to Home</button>
    },
    {description:<div style={myDescription}>"Set in the not-so-distant future, Dr. Jennifer Ashgrove - one of the world's top scientists - is battling to find a cure to a crisis that affects the world's water supply. As the weight of the world takes its toll, she retreats to the countryside with her husband in a bid to clear her mind."</div> ,
    trailer:<div style={myTrailer}><a style={{color:"yellow"}} href="https://t.me/bad_the_guy/777">  watch the trailer</a></div> ,
    button: <button style={myButton} onClick={()=>{navigate("/")}} >Back to Home</button>
    },
    {description:<div style={myDescription}>"When a group of mercenaries attack the estate of a wealthy family, Santa Claus must step in to save the day (and Christmas)."</div> ,
    trailer: <div style={myTrailer}> <a style={{color:"yellow"}} href="https://t.me/bad_the_guy/779">  watch the trailer</a></div> ,
    button: <button style={myButton} onClick={()=>{navigate("/")}} >Back to Home</button>
    },
    {description:<div style={myDescription}>"A cure for some and a curse for others, widely prescribed anti-anxiety medication is examined by patients and experts in this revealing documentary. "</div> ,
    trailer:<div style={myTrailer}><a style={{color:"yellow"}}href="https://t.me/bad_the_guy/780">  watch the trailer</a></div> ,
    button: <button style={myButton} onClick={()=>{navigate("/")}} >Back to Home</button>
    },
    {description:<div style={myDescription}>"A ghost reaches out to two bumbling ghostbusters for a business idea. However, their plans go downhill as the eerie ghost reveals her plan."</div> ,
     trailer:<div style={myTrailer}><a style={{color:"yellow"}} href="https://t.me/bad_the_guy/779">  watch the trailer</a></div>,
     button: <button style={myButton}  onClick={()=>{navigate("/")}} >Back to Home</button>

    },
  ]



return(
   myListMovies
)
}