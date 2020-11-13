import React, { Component } from 'react'
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row} from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';


export default class App extends Component {
  
  state = {
    currentCategory : "",
    products : [],
    cart : []
  }

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id);
  };

  getProducts = (categoryId) =>{

    let url = "http://localhost:3000/products";

    if(categoryId){
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
    .then(response => response.json()) 
    .then(data => this.setState({products : data})); // data = response.json
  };

  addToCart = product =>{
    let newCart = this.state.cart;
    let addedItem = newCart.find(item => item.product.id === product.id);
    if(addedItem){
      addedItem.quantity += 1;
    }
    else{
      newCart.push({
        product : product,
        quantity : 1
      });
    }
    this.setState({
      cart : newCart
    });
    alertify.success(product.productName + " added to cart!", 2);
  }

  removeFromCart = product =>{
    let newCart = this.state.cart.filter(item => item.product.id !== product.id);
    this.setState({
      cart : newCart
    });
    alertify.error(product.productName + " removed from cart!", 2);

  };
  
  render() {
    let productInfo = {
      title : "Product List"
    };
    
    let categoryInfo = {
      title : "Category List"
    };
    return (
      <div>
        <Container>
            <Navi
              cart={this.state.cart}
              removeFromCart = {this.removeFromCart}
            />
          <Row>
            <Col xs="3"> {/* xs indicates the percentage of the row. Full percentage is 12*/}
              <CategoryList
                info = {categoryInfo}
                currentCategory = {this.state.currentCategory}
                changeCategory = {this.changeCategory}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={ props =>(
                    <ProductList
                      {...props}
                      info={productInfo}
                      currentCategory = {this.state.currentCategory}
                      products = {this.state.products}
                      addToCart = {this.addToCart}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={ props =>(
                    <CartList
                      {...props}
                      cart = {this.state.cart}
                      removeFromCart = {this.removeFromCart}
                    />
                  )}
                ></Route>
                <Route exact path="/form1" component={FormDemo1}></Route>
                <Route exact path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
    </div>
    )
  }
}