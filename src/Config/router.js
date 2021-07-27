import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/home";
import Login from "../containers/login";
import LeaderBoard from "../containers/leaderboard";
import AddPoll from "../containers/addPoll";
import NavBar from "../components/NavBar";
import { Container } from "@material-ui/core";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <div style={{ minHeight: "70px" }}></div>
      <Container>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/leader" component={LeaderBoard} />
          <Route exact path="/add" component={AddPoll} />
        </Switch>
      </Container>
    </Router>
  );
}

export default AppRouter;
