
import {withAuthenticator,AmplifySignOut} from "@aws-amplify/ui-react"

function App() {
  return (
    <div className="App">
      <h1>Welcome, User</h1>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
