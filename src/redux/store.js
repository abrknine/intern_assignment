// import { createStore } from "redux";
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import { createStoreHook } from "react-redux";
/*import reducers from "./reducers/index";

const store = creatStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
*/


import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
