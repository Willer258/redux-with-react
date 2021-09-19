import "./App.css";
import PhoneContainer from "./components/phone-container";
import store from './redux/store'
import { Provider } from "react-redux";
import TvContainer from "./components/tv-container";

function App() {
  return (

    // <Provider store = {store}> pour permeetre d'avoie le store dans toute l'application
    <Provider store = {store}>
      <div className="App flex flex-col xl:flex-row ">
        <PhoneContainer />
        <TvContainer/>
      </div>
    </Provider>
  );
}

export default App;
