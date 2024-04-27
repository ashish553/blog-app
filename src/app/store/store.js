import { useSelector } from "react-redux";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const blogSlice = require("./blogSlice");
import blogreducer from './blogSlice';

const rootReducer = combineReducers({
    blogDetails: blogreducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store
export const useAppSelector = useSelector;