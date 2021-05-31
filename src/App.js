import logo from './logo.svg';
import Repos from './repos';
import Search from "./search"
import { HotelProvider } from './Context/context'

function App() {
  return (
    <HotelProvider>
      <div className="App">
        <Search />
        <Repos />
      </div>
    </HotelProvider>
  );
}

export default App;
