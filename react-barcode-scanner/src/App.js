
import {
  Route,
  Switch,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/Product/Add";
import ProductList from "./pages/Product/List";
function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to = {"/"}>Home</Link>
          </li>
          <li>
            <Link to = {"/product"}>Product List</Link>
          </li>
          <li>
            <Link to = {"/product/add"}>Add Product</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/product" component = {ProductList}/>
        <Route exact path = "/product/add" component = {AddProduct}/>
      </Switch>
    </div>
  );
}

export default App;
