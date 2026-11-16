
import { useState } from 'react'
import './App.css'

import Header from './Components/Header'
import CardConceito from './Components/CardConceito'
import ListaDuvidas from './Components/ListaDuvidas'

function App() {

  const [revisados, setRevisados] = useState([])

  const conteudos = [
    {
      id: 1,
      titulo: 'Git e GitHub',
      explicacao: 'Github é uma plataforma online onde você consegue armazenar seus codigos e compartilhalos. Já Git é um instrumento usado pra controlar as atualizações feitos em um codigo',
      exemplo: 'git init\n git add .\n git commit -m "Meu primeiro commit"\n git push',
      erro: false
    },
    {
      id: 2,
      titulo: 'Node.js e npm',
      explicacao: 'Node.js deixa você usar o javascript fora do seu navegador, já o npm é usado para instalar e administar pacotes e bibliotecas que ajudam no desenvolvimento do codigo',
      exemplo: 'npm install\nnpm run dev',
      erro: false
    },
    {
      id: 3,
      titulo: 'React e JSX',
      explicacao: 'React é uma biblioteca JS utilizada pra criar interfaces, JSX permite escrever codigos parecidos com html dentrodo Javascript',
      exemplo: 'function App() {\n  return <h1>Olá, mundo!</h1>\n}',
      erro: true,
      erroTitulo: 'Nome de componente em minúsculas',
      codigoErro: 'function app() {\n  return <h1>Olá!</h1>\n}',
      correcao: 'Os componentes do react tem que começar com letra maiuscula. O correto seria ter usado "App" e não "app"'
    },
    {
      id: 4,
      titulo: 'Componentes e props',
      explicacao: 'Componentes são partes reutilizaveis de uma interface Já props são informações passadas de um componente para outro',
      exemplo: 'function Saudacao(props) {\n  return <h2>Olá, {props.nome}!</h2>\n}\n\n<Saudacao nome="Gustavo" />',
      erro: true,
      erroTitulo: 'Prop ignorada',
      codigoErro: 'function Saudacao() {\n  return <h2>Olá!</h2>\n}',
      correcao: 'O componente não recebeu a informação passada pelo prop. Para corrigir isso precisam colocar props nos parâmetros da função e utilizar props.nome.'
    },
    {
      id: 5,
      titulo: 'Estado e Hooks',
      explicacao: 'Hooks são funções especiais que o react tem. O useState deixa você guardar informações que podem mudar durante o uso do site e atualizar a tela.',
      exemplo: 'const [contador, setContador] = useState(0)\n\n<button onClick={() => setContador(contador + 1)}>\n  {contador}\n</button>',
      erro: false
    },
    {
      id: 6,
      titulo: 'Eventos e validação',
      explicacao: 'Eventos permitem que quando o usuario enteraja com a pagina, o site execute ações, como quando o user clica em um botão ou digita em um campo. A validação verifica se as informações estão certas.',
      exemplo: 'function enviar() {\n  alert("Botão clicado!")\n}\n\n<button onClick={enviar}>Enviar</button>',
      erro: true,
      erroTitulo: 'Uso incorreto do onClick',
      codigoErro: '<button onClick={enviar()}>\n  Enviar\n</button>',
      correcao: 'O erro acontece porque enviar() executa a função imediatamente. O certo é passar apenas enviar, para que ela seja executada quando o usuario clicar no botão'
    },
    {
      id: 7,
      titulo: 'Listas e imutabilidade',
      explicacao: 'O metodo map() permite mostrar varios elementos de uma lista. A imutabilidade significa criar uma nova versão do array em vez de modificar diretamente o  array original.',
      exemplo: 'const nomes = ["Ana", "João", "Pedro"]\n\n{nomes.map((nome, index) => (\n  <p key={index}>{nome}</p>\n))}',
      erro: true,
      erroTitulo: 'Mutação direta de arrays',
      codigoErro: 'tarefas.push("Estudar React")',
      correcao: 'O push modifica diretamente o array original, no react, temos que criar um novo array para atualizar o estado usando , por exemplo, setTarefas([...tarefas, "Estudar React"]).'
    },
    {
      id: 8,
      titulo: 'Arquitetura web',
      explicacao: 'Frontend é a parte visual, a aparencia de um site, com a qual o usuário interage. Backend é responsável pelo processamento e armazenamento de informações, em outras palavras é o codigo. APIs permitem a comunicação entre sistemas, Já Localstorage guarda dados no proprio navegador e SPA é uma aplicação que atualiza partes da página sem ter que recarregar a pagina toda, enquanto PWA tem recursos de aplicativos web instaláveis.',
      exemplo: 'Frontend: interface do usuário.\nBackend: processamento dos dados.\nAPI: comunicação entre sistemas.\nLocalStorage: armazenamento local.\nSPA: navegação sem recarregar toda a página.\nPWA: aplicação web com recursos extras.',
      erro: false
    }
  ]

  function marcarRevisado(id) {
    setRevisados((anterior) =>
      anterior.includes(id)
        ? anterior.filter((item) => item !== id)
        : [...anterior, id]
    )
  }

  return (
    <div className="container">

      <Header />

      <main>

        <section className="introducao">
          <h2>Guia de Estudos</h2>
          <p>
            Confira os conteúdos abaixo e aprenda conceitos importantes
            sobre React, JavaScript e desenvolvimento web.
          </p>
        </section>

        <div className="progresso">
          <h3>Conteúdos revisados: {revisados.length}/8</h3>

          <div className="barra">
            <div
              className="barra-preenchida"
              style={{ width: `${(revisados.length / 8) * 100}%` }}
            ></div>
          </div>
        </div>

        <section className="cards">

          {conteudos.map((conteudo) => (
            <CardConceito
              key={conteudo.id}
              conteudo={conteudo}
              revisado={revisados.includes(conteudo.id)}
              marcarRevisado={marcarRevisado}
            />
          ))}

        </section>

        <ListaDuvidas />

      </main>

      <footer>
        <p>React em Prática — Guia de Estudos</p>
        <p>Projeto desenvolvido para fins educacionais.</p>
      </footer>

    </div>
  )
}

export default App
