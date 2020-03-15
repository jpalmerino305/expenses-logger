import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // For development purposes only

import testReducer from '../redux/reducers/test_reducer';

import TestComponent from '../redux/containers/test_container';


const middlewares = [thunk];

const rootReducer = combineReducers({
  test: testReducer
});

const composeEnhancers = (process.env.RAILS_ENV === 'development') ? composeWithDevTools : compose;
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);

class TestAppComponent extends React.Component {

  componentDidMount() {
    console.log('%c=== Mounted: components/TestAppComponent ===', 'color: green; font-weight: bold;');
  }

  render () {
    return (
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );

  }

}

export default TestAppComponent;