
function CardConceito({ conteudo, revisado, marcarRevisado }) {

  return (
    <div className={`card ${revisado ? 'card-revisado' : ''}`}>

      <span className="numero">
        CONTEÚDO 0{conteudo.id}
      </span>

      <h2>{conteudo.titulo}</h2>

      <p>{conteudo.explicacao}</p>

      <div className="exemplo">

        <h3>Exemplo prático</h3>

        <pre>{conteudo.exemplo}</pre>

      </div>

      {conteudo.erro && (
        <div className="correcao">

          <h3>
            Correção de erro: {conteudo.erroTitulo}
          </h3>

          <p>Exemplo incorreto:</p>

          <pre>{conteudo.codigoErro}</pre>

          <p className="explicacao-correcao">
            <strong>Como corrigir:</strong> {conteudo.correcao}
          </p>

        </div>
      )}

      <button
        className={revisado ? 'btn-revisado' : 'btn-revisar'}
        onClick={() => marcarRevisado(conteudo.id)}
      >
        {revisado ? 'Desmarcar revisão' : 'Marcar como revisado'}
      </button>

    </div>
  )
}

export default CardConceito
