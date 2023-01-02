import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const elemento = (
    <div className="App">
      <header className="App-header">
        <h1>La hora local es: </h1>
        <h2>| {new Date().toLocaleTimeString("es-US",{
          timeZone: "Pacific/Easter",
          hour12: true, // false
          hour: "numeric", // 2-digit
          minute: "2-digit", // numeric
          second: "2-digit" // numeric
        })} |</h2>
      </header>
    </div>
  );
  root.render(elemento);
}

export default App;
