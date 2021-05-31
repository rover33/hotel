import logo from './logo.svg';
import Repos from './repos';
import {HoteltProvider} from './Context/context'

function App() {
  return (
    <HoteltProvider>
      <div className="App">
        <Repos />
      </div>
    </HoteltProvider>
  );
}

export default App;
