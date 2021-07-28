import Home from "../containers/home";
import Login from "../containers/login";
import LeaderBoard from "../containers/leaderboard";
import AddPoll from "../containers/addPoll";
import NavBar from "../components/NavBar";
import { Container } from "@material-ui/core";
import MyPolls from "../containers/myPolls";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {  Route, Switch,useLocation } from "react-router-dom";

function AppRouterContainer() {
    const location=useLocation()
    return (
        <div>
            <NavBar />
            <div style={{ minHeight: "70px" }}></div>
            <Container>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames='fade'
                    >
                        <Switch location={location}>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/leader" component={LeaderBoard} />
                            <Route exact path="/add" component={AddPoll} />
                            <Route exact path="/mypolls" component={MyPolls} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Container>
        </div>
    )
}
export default AppRouterContainer