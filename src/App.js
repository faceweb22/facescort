
import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import UserDetailContainer from "./components/UserDetailContainer";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Provincia from "./components/Provincia";


function App() {
  return (    
    
    <BrowserRouter>

    <Switch>


      <Route exact path="/facescortt/buenos-aires/:ubicacion">
        <NavBar/>
        <Users/>
      </Route>

      <Route exact path="/facescortt/:nombre-:id-:wp">
        <NavBar/>
        <UserDetailContainer/>
      </Route>
      
      <Route path="/facescortt/buenos-aires">
        <NavBar/>
        <Users/>
      </Route>

      <Route path="/facescortt/contacto">
        <NavBar/>
        <Contacto/>
      </Route>
      <Route path="/facescortt">
        <Provincia/>
        <Footer/>
      </Route>


    </Switch>
    

    </BrowserRouter>
  );
}

export default App;
