import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Product from './views/Product';
import Cart from './views/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Product path="/:id"/>
        <Cart path="/cart/:id"/>
      </Router>
    </div>
  );
}

export default App;
