import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_PREFIX_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function App () {
  const [fact, setFact] = useState()
  const [url, setUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3)
        console.log(threeFirstWords)

        // fetch('https://api.unsplash.com/search/photos?page=1&query=office&client_id=Q-suRYnwxxXMZqiT_7TKPum4_WORM_FkIlyc9DS_FtU')
        fetch('https://api.thecatapi.com/v1/images/search')
          .then(res => res.json())
          .then(data => {
            const { url } = data[0]
            setUrl(url)
            console.log(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      <img src={url} alt='Image extracted from the first three words' />
    </main>
  )
}
