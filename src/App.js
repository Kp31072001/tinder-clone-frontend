
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      

      {/* header */}
      <Header />
      {/* tinderCards */}
      <TinderCards/>
      {/* footer */}
      <SwipeButtons />

    </div>
  );
}

export default App;
