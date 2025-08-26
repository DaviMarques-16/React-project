import './App.css';
import HelloWorld from './Components/HelloWorld';

function App() {
  const name = 'Davi';

  const newName = name.toUpperCase();

  function soma(a, b) {
    return a + b
  }

  const url = "";

  return (
    <div className="App">
      
      <h1>Meu Projeto React</h1>
      <p>Primeiro projeto React</p>
      <p>Olá, {newName}</p>
      <p>Soma: {soma(2,4)}</p>
      
      <img src={url} alt='Minha Imagem' />

      <HelloWorld />
    </div>
  );
}

export default App;
