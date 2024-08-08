import './App.css';
// eslint-disable-next-line
import Accordian from './components/accordian'; 
// eslint-disable-next-line
import RandomColor from './components/random-color';
import StartRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* {<Accordian />} */}
      {/* <RandomColor /> */}
      {<StartRating noOfStars={10} />}
    </div>
  );
}

export default App;
