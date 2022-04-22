import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import { useAppContext } from './Context.js'
import Login from './Login'

function App() {
  const { appState } = useAppContext(); 
  return (
    <div className="App">
      {appState === "login" && <Login />}
      {appState === "home " && (
        <>
        <Header explain = { appState }/>
        <Home />
        </>
      )}
    </div>
  );
}

export default App;
