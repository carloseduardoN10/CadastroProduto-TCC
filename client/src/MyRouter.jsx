import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Login from "./pages/Login.jsx"
import RotasProtegidas from "././pages/RotasProtegidas.jsx"
import Home from "./pages/Home.jsx"
import Cadastro from "./pages/Cadastro.jsx";

// Importação das páginas de produtos
import CadastrarProduto from "./pages/Produtos/CadastrarProduto.jsx"
import EditarProduto from "./pages/Produtos/EditarProduto.jsx"
import VerProdutos from "./pages/Produtos/VerProdutos.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
        {
            index: true,
            element: <Login />
        },
        {
            path: "login",
            element: < Login/>

        },
        {
          path: "cadastro",
          element: <Cadastro />
        }
    ]
  },
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
        {
            path: "home",
            element: <Home />
        },
        {
            path: "produtos",
            children: [
                { 
                  index: true,
                  element: <VerProdutos/>
                },
                {
                  path: "cadastrar",
                  element: <CadastrarProduto/>
               },
               {   
                  path: "editar/:id",
                  element: <EditarProduto/>
               }
            ]
        }
      ]
    }
 ])

 export default router

