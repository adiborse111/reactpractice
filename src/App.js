import './App.css';
// eslint-disable-next-line
import Accordian from './components/accordian'; 
import ImageSlider from './components/image-slider';
// eslint-disable-next-line
import RandomColor from './components/random-color';
// eslint-disable-next-line
import StartRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* { <Accordian /> } */}
      {/* <RandomColor /> */}
      {/* {<StartRating noOfStars={10} />} */}
      {<ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/>}
    </div>
  );
}

export default App;
