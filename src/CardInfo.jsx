import React from 'react'

const CardInfo = (props) => {
  const character = props.character

  return (
    <div>
      <h3>{character.name}</h3>
      <span>{character.status} - {character.species}</span>
    </div>
  )
}

export default CardInfo