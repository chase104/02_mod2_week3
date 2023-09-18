import { useState } from 'react'

import './App.css'
import PodcastCard from './components/PodcastCard';

function App() {
  const [podcasts, setPodcasts] = useState([
    {
      id: 1,
      title: 'Podcast 1',
      host: 'Host 1',
      description: 'Description of Podcast 1',
    },
    {
      id: 2,
      title: 'Podcast 2',
      host: 'Host 2',
      description: 'Description of Podcast 2',
    },
    {
      id: 3,
      title: 'Podcast 3',
      host: 'Host 3',
      description: 'Description of Podcast 3',
    },
    {
      id: 4,
      title: 'Podcast 4',
      host: 'Host 4',
      description: 'Description of Podcast 4',
    },
  ]);


  //  []
  const arrayOfJSX = podcasts.map((eachObject) => {
    return <PodcastCard key={eachObject.id} eachObject={eachObject} />
  })


  return (
    <>
      <h1>my app</h1>

      {arrayOfJSX}
    </>
  )
}

export default App
