import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    fetch('https://the-dragon-news-server-83uka9n9j-armans-projects-cd84b623.vercel.app/news')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
