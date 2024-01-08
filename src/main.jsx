import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient,QueryClientProvider } from 'react-query'

import App from './App.jsx'
import GlobalStyle from './GlobalStyles.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
