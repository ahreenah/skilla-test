
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './components/SideMenu';
import Calls from './components/Calls/index.jsx';

function App() {
  return (
    <div className="App">
      <SideMenu></SideMenu>
      <Calls />
    </div>
  );
}

export default App;
