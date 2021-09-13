import React from "react";
import { Switch, Route } from "react-router-dom";
import Checkout from "../User/pages/Checkout/Checkout";
import Faq from "../User/pages/FAQ/FAQ";
import HomePage from "../User/pages/HomePage/HomePage";
import Login from "../User/pages/Login/Login";
import Offer from "../User/pages/Offer/Offer";
import OrderComplete from "../User/pages/OrderComplete/OrderComplete";
import Register from "../User/pages/Register/Register";

function Routes() {
  return (
    <div>
      <Switch>
        {/* user */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/offer' component={Offer} />
        <Route exact path='/order' component={OrderComplete} />
        {/* admin */}
      </Switch>
    </div>
  );
}

export default Routes;
