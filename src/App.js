import logo from './logo.svg';
import Repos from './repos';
import { HotelProvider } from './Context/context'

function App() {
  return (
    <HotelProvider>
      <div className="App">
        <Repos />
      </div>
    </HotelProvider>
  );
}

export default App;
