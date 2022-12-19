import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React" />
      <Card
        src="https://dummyimage.com/200x200/000/fff"
        title="Título de la carta"
        description="Lorem ipsum dolor sit amet consectetur adipisicing."
      />
      <Footer />
    </>
  );
}

export default App;
