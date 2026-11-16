
import { useState } from 'react'

function ListaDuvidas() {

  const [duvida, setDuvida] = useState('')
  const [duvidas, setDuvidas] = useState([])

  function adicionarDuvida() {

    const texto = duvida.trim()

    if (texto === '') {
      alert('Digite uma dúvida válida!')
      return
    }

    setDuvidas((anterior) => [...anterior, {
      id: Date.now(),
      texto: texto
    }])

    setDuvida('')
  }

  return (
    <section className="duvidas">

      <h2>Minhas dúvidas</h2>

      <p>
        Escreva suas dúvidas sobre os conteúdos estudados.
      </p>

      <div className="campo-duvida">

        <input
          type="text"
          placeholder="Digite sua dúvida..."
          value={duvida}
          onChange={(e) => setDuvida(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              adicionarDuvida()
            }
          }}
        />

        <button onClick={adicionarDuvida}>
          Adicionar
        </button>

      </div>

      <div className="lista-duvidas">

        {duvidas.map((item) => (
          <div className="item-duvida" key={item.id}>
            {item.texto}
          </div>
        ))}

        {duvidas.length === 0 && (
          <p className="sem-duvidas">
            Nenhuma dúvida cadastrada ainda.
          </p>
        )}

      </div>

    </section>
  )
}

export default ListaDuvidas
