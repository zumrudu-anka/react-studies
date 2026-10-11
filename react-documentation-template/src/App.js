/**
*   @author Osman DURDAĞ
*   @version 0.0.1
*   @since 05.12.2020
*   @copyright Osman DURDAĞ
*/

import { useState } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Layouts/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  const [logged, setLogged] = useState(false);

  return (
    logged ?
    <>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Home}></Route>
        <Route exact path = "/login" component = {Login}></Route>
      </Switch>
    </>
    : <Login/>
  );
}

export default App;
