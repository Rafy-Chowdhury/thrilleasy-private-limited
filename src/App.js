import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import BookingDetails from './Components/BookingDetails/BookingDetails';
import BookingSuccess from "./Components/BookingSuccess/BookingSuccess";
import FormValidation from "./Components/FormValidation/FormValidation";
import ScrollToTop from './Components/ScrollToTop';

export const UserContext = createContext();

function App() {
  const [flowData, setFlowData] = useState({})
  console.log(flowData);
  return (
    <UserContext.Provider value = {[flowData, setFlowData]}>
    <Router>
    <ScrollToTop />
    <div>
      <Switch>
      <Route path="/booking">
          <BookingDetails />
        </Route>
        <Route path="/form/:title">
          <FormValidation/>
        </Route>
        <Route path="/success">
          <BookingSuccess/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
