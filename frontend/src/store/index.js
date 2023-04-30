import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import guideReducer from './guide';
import childReducer from './child';
import childActivityReducer from './child_activities';
import activityReducer from './activities';

const rootReducer = combineReducers({
  session: sessionReducer,
  guide: guideReducer,
  child: childReducer,
  childActivities: childActivityReducer,
  activity: activityReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
