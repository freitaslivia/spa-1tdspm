//
import Cabecalho from "./components/Cabecalho"
import Carros from "./components/Carros"
import Parceiros from "./components/Parceiros"

export default function App() {

  return (
    <>
      <div className="container">
        {/* comentario */}

        
        {/* Vamos criar um cabeçalho com um header, um h1 com titulo e uma lista ul com 3 item
        com link.  */}

        <Cabecalho/>

        {/* Vamos criar uma seção com uma div, com 3 <p></p> e estes <p></p> vão ter 3 linhas de lorem, abaixo
        dos <p></p> uma img.  apaguei*/}

        <Carros/>

        <Parceiros/>

        {/* Vamos criar uma rodape com uma div, uma lista com 3 itens com links para redes sociais e abaixo um <p></p> 
        com o texto e código do simbolo de direitos reservados*/}

        <footer>
          <div>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="">X</a></li>
              <li><a href="">Reddit</a></li>
            </ul>
            <p>&copy; Todos direitos reservados</p>
          </div>
        </footer>
      
      </div> 
    </>
  )
}