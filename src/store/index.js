import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { increment } from '../actions';
import rootReducer from '../reducers';

const initialState = {};
const middleware = [thunk];
let composeEnhancers;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

let interval = null;

store.subscribe(() => {
  const state = store.getState();
  if (!interval && state.isOn) {
    interval = window.setInterval(() => {
      store.dispatch(increment(1));
    }, 1000);
  } else if (interval && !state.isOn) {
    window.clearInterval(interval);
  }
});

export default store;
