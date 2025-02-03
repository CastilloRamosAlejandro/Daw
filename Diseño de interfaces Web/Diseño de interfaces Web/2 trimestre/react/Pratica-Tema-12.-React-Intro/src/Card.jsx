import React from 'react'

const Card = ({Titulo,Text,Id,}) => {
    const ImagePath=`./src/assets/img/${Id}.jpg`
  return (
    <div style={{
        width:"200px",
        display:"flex",
        flexDirection:"row",
        gap:"10px"
    }}>
        <img 
        src={ImagePath} 
        style={{width:"200px"}} 
        alt={`imagen de ${Titulo}`}
        ></img> 
        <div style={{ 
        border: "1px solid black",
        padding: "10px",
        maxWidth: "200px",
        textAlign:"center"}}>  
        <h1>{Titulo}</h1>
        <p>{Text}</p>
        </div>  
    </div>

  )
}
export default Card;