import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Dashboard/home.tsx'
import Neet from './Neet/neet.tsx'
import Eapcet from './Eapcet/eapcet.tsx'
import Cuet from './Cuet/Cuet.tsx'
import Questions from './questions/question.tsx'
import Neet2 from './Neet/neet2.tsx'
import Score from './score'
import Eapcet2 from './Eapcet/Eapcet2.tsx'
import Cuet2 from './Cuet/Cuet2.tsx'

function App() {
  const router = createHashRouter([
    { path: '/home', element: <Home /> },
    { path: '/neet', element: <Neet /> },
    { path: '/eapcet', element: <Eapcet /> },
    { path: '/cuet', element: <Cuet /> },
    { path: '/question', element: <Questions /> },
    { path: '/neet2', element: <Neet2 /> },
    { path: '/score', element: <Score /> },
    { path: '/eapcet2', element: <Eapcet2 /> },
    { path: '/cuet2', element: <Cuet2 /> }
  ])

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
