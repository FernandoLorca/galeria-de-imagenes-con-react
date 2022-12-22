import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React" />
      <div className="mainCard">
        <Card
          src="./img/field.jpg"
          title="Camping en el campo"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <Card
          src="./img/forest.jpg"
          title="Camping en el bosque"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />

        <Card
          src="./img/ice.jpg"
          title="Camping sobre hielo"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
      </div>
      <div className="mainCard">
        <Card
          src="./img/lake.jpg"
          title="Camping en el lago"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <Card
          src="./img/mountain.jpg"
          title="Camping en la montaña"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />

        <Card
          src="./img/river.jpg"
          title="Camping al lado del río"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
