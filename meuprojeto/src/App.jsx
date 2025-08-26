import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName'
import AlbumFav from './Components/AlbumFav';
import Palavras from './Components/Palavras';
import Pessoa from './Components/Pessoa';
import Escolas from './Components/Escolas';
import Frase from './Components/Frase';

import List from './Components/List';

function App() {

  const nome = 'Maria'
  const album = "The Life of a Showgirl"

  return (
    <div className="App">

      <HelloWorld />

      <SayMyName nome='Davi' /> 
      <SayMyName nome='João' />
      <SayMyName nome={nome} />

      <AlbumFav albumfav="The Tortured Poets Department" />
      <AlbumFav albumfav={album} />

      <Palavras word="React" />

      <hr></hr>
      <h2>Pessoa:</h2>
        <Pessoa
          nome = 'Davi Marques'
          idade = '18'
          profissao = 'Estudante'
          foto = ""
          />

      <hr></hr>
      <Escolas
        nome = 'EEEP Paulo Petrola'
        endereco = 'Rua das Flores, 123'
        fundacao = '1952'
        alunos = '400'
      />

      <Frase />

      <br />
      <hr />

      <List />

    </div>
    // Passando props (propriedades) para componentes
  );
}

export default App;
