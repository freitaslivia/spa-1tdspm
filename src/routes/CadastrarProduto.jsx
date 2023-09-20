import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useNavigate} from "react-router-dom";

export default function CadastrarProduto() {
  document.title = "Cadastrar Produtos";

  //Utilizando o useNavigate para fazer um redirect
  const navigate = useNavigate()

  const [novoProduto, setNovoProduto] = useState({
    id: ListaProdutos.length + 1, // ID sequencial
    nome: "",
    desc: "",
    valor: "",
  });

  function onChange(evt) {
    const { name, value } = evt.target;

    setNovoProduto({ ...novoProduto, [name]: value });
  }

  function onSubmit(evt) {
    evt.preventDefault();

    // Adicionar o novo produto à lista existente
    ListaProdutos.push(novoProduto);

    // Limpar os campos do novo produto e atualizar o ID sequencial
    setNovoProduto({
      id: ListaProdutos.length + 1, // Próximo ID sequencial
      nome: "",
      desc: "",
      valor: "",
    });

    navigate("/produtos");
    
  }

  return (
    <div>
      <h1>CADASTRAR- PRODUTOS</h1>

      <div>
        <form onSubmit={onSubmit}>
          <fieldset>
            <legend>PRODUTO</legend>
            <div>
              <label htmlFor="idNome">Nome do Produto:</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                value={novoProduto.nome}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição do Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={novoProduto.desc}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="idValor">Valor do Produto:</label>
              <input
                type="text"
                name="valor"
                id="idValor"
                value={novoProduto.valor}
                onChange={onChange}
              />
            </div>
            <div>
              <button type="submit">CADASTRAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
