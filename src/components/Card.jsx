



function Card(props){


    return (
       
        <div style={{backgroundColor: "#121212", padding: "1em", borderRadius: "1.5em"}}>
           <img src={props.url} style={{borderRadius: "50%"}}/>
           <div>
               <h2>{props.title}</h2>
               <p>{props.description}</p>
           </div>
        
          </div>
      
    )
}


export default Card