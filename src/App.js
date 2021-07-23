import MainRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {

  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default withAuthenticator(App);
