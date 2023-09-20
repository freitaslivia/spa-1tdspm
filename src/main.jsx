import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Erro404 from './routes/Erro404.jsx';
import Produtos from './routes/Produtos.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import CadastrarProduto from './routes/CadastrarProduto.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro404 />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar/produtos/:id', element: <EditarProduto /> },
      { path: '/excluir/produtos/:id', element: <ExcluirProduto /> },
    ],
  },
  { path: '/cadastrar/produtos', element: <CadastrarProduto /> },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router}/>
  </React.StrictMode>,
)

