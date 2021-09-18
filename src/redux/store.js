import { createStore } from "redux";
import phoneReducer from './phone/reducerPhone'

// le store est creer et implanter sous app pour l 'utiliser'


const store = createStore(phoneReducer)

export default store;