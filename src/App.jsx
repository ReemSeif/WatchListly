import { useState } from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Watched from './components/Watched'
import AddMovie from './components/AddMovie'
import Layout from './components/Layout'
import ContextProvider from './context/moviesContext'
function App() {
let router= createBrowserRouter([{
path:'' , element:<Layout/>,
children:[
  {
    path:'' ,element:<Home/>
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
<ContextProvider>
   <RouterProvider router={router}></RouterProvider>
</ContextProvider>
 

  

       
    
   
  )
}

export default App
