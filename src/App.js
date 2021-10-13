import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1>Welcome to my awesome store!</h1>

      <Catalog />

      <Footer></Footer>
    </div>
  );
}

export default App;
