import React, { useEffect, useState } from 'react'
import CardInfo from './CardInfo'

const Home = () => {
  const initialState = []
  const [characters, setCharacters] = useState(initialState)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.log('Erro al traer los personajes', error)
      }
    }
    
    fetchCharacters()
  }, [])

  return (
    <div>
      <h1>Rick and Morty API</h1>
      <ul>
        {characters.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.name} />
                <CardInfo character={item} />
              </div>
            </li>
          )
        })}
        {/* {characters.map(character => <li key={character.id}>{character.name}</li>)} */}
      </ul>
    </div>
  )
}

export default Home