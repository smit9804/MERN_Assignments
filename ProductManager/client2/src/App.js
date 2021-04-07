import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './views/Detail';
import Update from './views/Update';


function App() {
  return (
    <div class="blueness">
      <div className="App">
        <Router>
          <Main path="/api/products/"/>
          <Detail path="/api/products/:id"/>
          <Update path="/api/products/edit/:id"/>
        </Router>
      </div>
    </div>
  );
}

export default App;
