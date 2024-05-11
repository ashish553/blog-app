import { useSelector } from "react-redux";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const blogSlice = require("./blogSlice");
import blogreducer from './blogSlice';
import userSlice from './userdetails';

const rootReducer = combineReducers({
    // blogDetails: blogreducer,
    userDetails: userSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store
export const useAppSelector = useSelector;