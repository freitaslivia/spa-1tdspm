

export default function CadastrarProduto() {
    
    document.title = "Cadastrar Produtos";
 
 
 
 
 
 
    return (
        <div>
        <h1>CADASTRAR- PRODUTOS</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>PRODUTO SELECIONADO</legend>
              <div>
                <input type="hidden" name="id" value={produto.id} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idNome">Nome do Produto:</label>
                <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição do Produto:</label>
                <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idValor">Valor do Produto:</label>
                <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handleChange}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
        </div>

    </div>
  )
}
