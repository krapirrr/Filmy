import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <div class="mb-3">
            <label for="film" class="form-label">Tytuł filmu:</label>
            <input type="text" class="form-control" id="film"/>
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
          <button type="sumbit" class="btn btn-primary">Submit</button>
          </form>
          </div>
  );
}

  export default App;
