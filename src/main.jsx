import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient,QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 

import App from './App.jsx'
import GlobalStyle from './GlobalStyles.jsx'
import Home from './pages/Home/Home.jsx'
import Movie from './pages/Movie/Movie.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
//     {
//       path: '/search'
//       element: <Search />
//     }
    {
      path: '/movie',
      element: <Movie />
    }
    ]
}])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router}/>
      <GlobalStyle />
    </QueryClientProvider>
  </React.StrictMode>
)
