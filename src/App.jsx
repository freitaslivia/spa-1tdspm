//
import Cabecalho from "./components/Cabecalho"

export default function App() {

  return (
    <>
      <div className="container">
        {/* comentario */}

        
        {/* Vamos criar um cabeçalho com um header, um h1 com titulo e uma lista ul com 3 item
        com link.  */}

        <Cabecalho/>

        {/* Vamos criar uma seção com uma div, com 3 <p></p> e estes <p></p> vão ter 3 linhas de lorem, abaixo
        dos <p></p> uma img.  */}

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum blanditiis assumenda, praesentium numquam, harum repudiandae doloribus sed quaerat neque officiis. Accusamus odio sed soluta vel rem, aliquam enim facilis.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore ad quis cumque ullam amet vitae exercitationem, officiis dolorem a illo ratione explicabo eligendi nemo hic eveniet veritatis magni debitis.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, facilis? Suscipit excepturi molestias vel obcaecati repellat nemo commodi nihil nisi optio maiores, quia esse expedita ullam, voluptatum unde dolore beatae!</p>
        </div>

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