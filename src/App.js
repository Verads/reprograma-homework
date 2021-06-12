import Title from './components/Title';
import { flowers } from './services/api';

// vou melhorar o código depois, eu prometo, vou diminuir as imagens e tudo :(
// a semana foi extremamente corrida


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Meu primeiro projeto React do Zero" />

       { console.log(flowers)}
       {flowers.map(flower => {
        return <div>
           <h2>{flower.name}</h2>
           <img src={flower.image} alt={flower.description} />
           <p>{flower.description}</p>
         </div>
       })}

      </header>
    </div>
  );
}

export default App;
