import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import UsersList from "./layouts/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import userPage from "./components/userPage";

function App() {
    return (
    <div>
        <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users" exact component={UsersList}/>
        <Route path="/users:userId?" component={userPage} />
        <Route path="/" exact component={Main}/>
      </Switch>
       {/* <Users /> */}
   </div>
    );
}

export default App;
