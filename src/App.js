import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const elemento = (
    <div className="App">
      <header className="App-header">
        <h1>La hora local es: </h1>
        <h2>Perú</h2>
        <h3>| {new Date().toLocaleTimeString("es-PE",{
          timeZone: "America/Lima",
          hour12: true, // false
          hour: "numeric", // 2-digit
          minute: "2-digit", // numeric
          second: "2-digit" // numeric
        })} |</h3>
        <h2>Mexico</h2>
        <h3>| {new Date().toLocaleTimeString("es-mx",{
          timeZone: "America/Mexico_City",
          hour12: true, // false
          hour: "numeric", // 2-digit
          minute: "2-digit", // numeric
          second: "2-digit" // numeric
        })} |</h3>
      </header>
    </div>
  );
  root.render(elemento);
}

export default App;
