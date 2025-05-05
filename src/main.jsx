import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importação do estado de autenticação do usuário
import { usuarioAutenticado } from './auth.js';

// Importação das páginas
import Home from './routes/Home/Home.jsx';
import Feed from './routes/Feed/Feed.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Associação das rotas e suas respectivas páginas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Na children que especificamos o caminho (rota) e o elemento associado a ele
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute usuarioAutenticado={usuarioAutenticado}>
            <Home />
          </ProtectedRoute>
        )
      },
      {
        path: '/feed',
        element: (
          <ProtectedRoute usuarioAutenticado={usuarioAutenticado}>
            <Feed />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
