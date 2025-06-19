import { useState } from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Watched from './components/Watched'
import AddMovie from './components/AddMovie'
import Layout from './components/Layout'
function App() {
let router= createBrowserRouter([{
path:'' , element:<Layout/>,
children:[
  {
    path:'home' ,element:<Home/>
  },
  {
     path:'Watchlater' ,element:<Watched/>
  },
  {
     path:'addMovie' ,element:<AddMovie/>
  }
]
}
,{path: '*', element: <h1>Page Not Found</h1> }
  
])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
