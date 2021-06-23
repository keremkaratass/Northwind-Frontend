import {combineReducers} from "redux";
import cartReducer from "../store/reducers/cartReducer"


const rootReducer= combineReducers({

    cart: cartReducer
})

export default rootReducer;