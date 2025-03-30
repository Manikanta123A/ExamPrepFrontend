import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './signUp'
import './App.css'
import Home from './Dashboard/home'
import Neet from './Neet/neet.tsx'
import Eapcet from './Eapcet/eapcet.tsx'
import Cuet from './Cuet/cuet.tsx'
import Questions from './questions/question'
import Neet2 from './Neet/neet2'
import Score from './score'
import Eapcet2 from './Eapcet/Eapcet2'
import Cuet2 from './Cuet/Cuet2'

function App() {

  const router = createBrowserRouter([
    {
      path:"/login",
      element:<SignUp/>
    },
    {
      path:'/home',
      element:<Home/>
    }
    ,{
      path:'/neet',
      element:<Neet/>
    },
    {
      path:'/eapcet',
      element:<Eapcet/>
    },
    {
      path:'/cuet',
      element:<Cuet/>
    },{
      path:'/question',
      element:<Questions/>
    },{
      path:'/neet2',
      element:<Neet2/>
    },{
      path:'/score',
      element:<Score/>
    },{
      path:'/eapcet2',
      element:<Eapcet2/>
    },{
      path:'/cuet2',
      element:<Cuet2/>
    },{
      path:'/score',
      element:<Score/>
    }
  ])
  return (
    <>
     <main>
      <RouterProvider router={router}></RouterProvider>
     </main>
    </>
  )
}

export default App
