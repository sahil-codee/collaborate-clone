import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <div className="cards__split">
        <div className="image__container">
          <img
            className="card__header"
            src="https://northstreetcreative.com/wp-content/themes/northstreet-theme-v4/img/text-or-video/expertise/img_expertise-02.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="collaborate__heading">
        <h1 className="">Let's Collaborate</h1>
      </div>
      <Cards />
    </div>
  );
}

export default App;
