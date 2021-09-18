import "./App.css";
import PhoneComponent from "./components/phone-component";
import store from './redux/store'
import { Provider } from "react-redux";

function App() {
  return (

    // <Provider store = {store}> pour permeetre d'avoie le store dans toute l'application
    <Provider store = {store}>
      <div className="App">
        <PhoneComponent />
      </div>
    </Provider>
  );
}

export default App;
