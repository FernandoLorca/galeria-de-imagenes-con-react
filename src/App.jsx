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
          src="https://picsum.photos/200/200"
          title="Título de la carta número 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <Card
          src="https://picsum.photos/200/200"
          title="Título de la carta número 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />

        <Card
          src="https://picsum.photos/200/200"
          title="Título de la carta número 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
      </div>
      <div className="mainCard">
        <Card
          src="https://picsum.photos/200/200"
          title="Título de la carta número 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <Card
          src="https://picsum.photos/200/200"
          title="Título de la carta número 5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />

        <Card
          src="https://picsum.photos/200/200"
          title="Título de la carta número 6"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
