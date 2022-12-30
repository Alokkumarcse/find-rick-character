import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/filter/Filter";
import Card from "./components/cards/Card";

function App() {
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Find <span className="text-primary">Rick-Morty</span> Characters
      </h1>

      <div className="container border">
        <div className="row border border-primary">
          {/* Render filter component to show filter characters*/}
            <div className="col-3">
              <Filter />
            </div>

          {/* Render Card component to show all characters */}
            <div className="col-8 border border-secondary">
              <div className="row border border-success"> 
                <Card />
                <Card />
                <Card />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
