import logo from './logo.svg';
import Repo  from './repos';
import {HoteltProvider} from './Context/context'

function App() {
  return (
    <HoteltProvider>
      <div className="App">
        <Repo />
      </div>
    </HoteltProvider>
  );
}

export default App;
