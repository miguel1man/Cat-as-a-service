import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const PREFIX_IMAGE_URL = 'http://api.giphy.com/v1/gifs/search?q=cat&api_key=y3hnhA4Cp8ZGBCg5fUJw0AozF9KsPvex&limit=3'

export function App () {
  const [fact, setFact] = useState()
  const [urlImage, setUrlImage] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        fetch(PREFIX_IMAGE_URL)
          .then(res => res.json())
          .then(response => {
            const { url } = response.data[0].images.original
            setUrlImage(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      <img src={urlImage} alt='Image extracted from the first three words' />
    </main>
  )
}
