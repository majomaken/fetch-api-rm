import React from 'react'

const CardInfo = (props) => {


  return (
    <div>
      <h3>{props.character.name}</h3>
      <span>{props.character.status} - {props.character.species}</span>
    </div>
  )
}

export default CardInfo