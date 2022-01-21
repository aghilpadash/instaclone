import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Post from "../pages/Post";
import User from "../pages/Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/p/:id">
          <Post />
        </Route>
        <Route path="/:userid">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
