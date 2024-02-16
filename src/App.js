import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import Navbar from "./components/Navbar";
import BodyContent from "./components/BodyContent";

function App() {
  return (
    <Auth0Provider
      domain="dev-zhg7p7jix57jrq2w.us.auth0.com"
      clientId="V97XTegF1OwWLcYwUdGx5ddE84Jq1F8P"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className="App">
        <div
          className="fixed inset-0 bg-gradient-to-b from-transparent to-gray-900"
          style={{ zIndex: -1 }}
        ></div>
        <Navbar />
        <BodyContent />
      </div>
    </Auth0Provider>
  );
}

export default App;
