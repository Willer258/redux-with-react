import { createStore, combineReducers } from "redux";
import phoneReducer from './phone/reducerPhone'
import tvReducer from "./tv/reducerTv";

// le store est creer et implanter sous app pour l 'utiliser'
const rootReducer = combineReducers({
    phone:phoneReducer,
    television : tvReducer
})

const store = createStore(rootReducer)

export default store;