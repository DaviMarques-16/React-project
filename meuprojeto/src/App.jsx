import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName'
import AlbumFav from './Components/AlbumFav';

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
    </div>
    // Passando props (propriedades) para componentes
  );
}

export default App;
