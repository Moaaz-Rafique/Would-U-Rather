import { BrowserRouter as Router } from "react-router-dom";
import AppRouterContainer from './appRouterContainer'

function AppRouter() {
  // let location=useLocation()
  // console.log(location);
  return (
    <Router>
      <AppRouterContainer/>
    </Router>
  );
}

export default AppRouter;
