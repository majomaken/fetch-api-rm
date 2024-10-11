import React, { useEffect, useState } from 'react'
import CardInfo from './CardInfo'
import styles from './styles.module.scss'

const Home = () => {
  const initialState = []
  const initialPageState = 1
  const [characters, setCharacters] = useState(initialState)
  const [page, setPage] = useState(initialPageState)
  const [totalPages, setTotalPages] = useState(0)


  const handleNextButtonClick = () => {
    setPage(page + 1)
    if (page === totalPages) {
      setPage(1)
    }
  }

  const handlePrevButtonClick = () => {
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setCharacters(data.results)
        setTotalPages(data.info.pages)
      } catch (error) {
        console.log('Erro al traer los personajes', error)
      }
    }
    
    fetchCharacters()
  }, [page])

  return (
    <div className={styles.container}>
      <h1>Rick and Morty API</h1>
      <button className={styles.button} onClick={handleNextButtonClick}>Pagina siguiente</button>
      <button className={styles.button} onClick={handleNextButtonClick}>Pagina anterior</button>

      <ul className={styles.list}>
        {characters.map((character) => {
          return (
            <li className={styles.character} key={character.id}>
              <img src={character.image} alt={character.name} />
              <CardInfo character={character} />
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Home