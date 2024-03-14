import { Switch, Route} from "react-router-dom";
import './App.css'

import OrderPizza from "./Components/OrderPizza";
import MainPage from './Components/MainPage';
import Success from "./Components/Success";
import React, { useState} from "react";

function App() {
  const [orderData, setOrderData] = useState(null);

  const handleOrderData = (d) => {
    setOrderData(d);
  };

  return (
    <>
      <Switch> 
        <Route exact path="/"  >
          <MainPage />
        </Route>
        <Route path="/order"  >
          <OrderPizza onSubmit={handleOrderData}/>
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </>
    );
}

export default App