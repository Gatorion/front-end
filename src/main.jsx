import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importação das páginas
import Home from './routes/Home.jsx';
import Feed from './routes/Feed.jsx';

// Associação das rotas e suas respectivas páginas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Na children que especificamos o caminho (rota) e o elemento associado a ele
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/feed',
        element: <Feed />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
