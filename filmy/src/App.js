import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {



// Stany przechowujące dane formularza
const [tytul, setTytul] = useState("");
const [rodzaj, setRodzaj] = useState("");

// Funkcja obsługująca przycisk "Dodaj"
const handleSubmit = (e) => {
e.preventDefault(); // Zapobiega odświeżeniu strony po kliknięciu "Dodaj"

// Wyświetlanie danych formularza w konsoli
console.log(`Tytuł: ${tytul}, Rodzaj: ${rodzaj}`);
};



  return (
    <div className="App">
      <form  onSubmit={handleSubmit}>
        <div>
          <div class="mb-3">
            <label for="film" class="form-label">Tytuł filmu:</label>
            <input type="text" class="form-control" id="film" />
          </div>
          <div class="mb-3">
            <label for="disabledSelect" class="form-label">Rodzaj filmu</label>
            <select id="disabledSelect" class="form-select">
              <option>Pusta</option>
              <option>Komedia</option>
              <option>Obyczajowy</option>
              <option>Sensacyjny</option>
              <option>Horror</option>
            </select>
          </div>
        </div>
        <button type="sumbit" class="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}
export default App;
