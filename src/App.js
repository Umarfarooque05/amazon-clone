import './App.css';
import { Navbar } from "./MyComponents/NavBar/Navbar";
import { All } from "./MyComponents/Header/All";
import { Slides } from './MyComponents/Carousel/Slides';
import { Cards } from "./MyComponents/Cards/Cards";
import { Carousel2 } from './MyComponents/Carousel2/Carousel2';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <All></All>
      <Slides></Slides>
      <Cards></Cards>
      <Carousel2></Carousel2>
      <Carousel2></Carousel2>
    </div>
  );
}

export default App;
