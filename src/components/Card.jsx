import React from 'react'

const Card = (props) =>{
    return(<div className='card'>
        <img src={props.image} alt={props.CardHeader}></img>
        <h2>{props.CardHeader}</h2>
        <h6>{"Best player: " + props.BestPlayer}</h6>
        <button className='team-button'><a href={props.TeamLink}>View Team</a></button>
        </div>)
}

export default Card;