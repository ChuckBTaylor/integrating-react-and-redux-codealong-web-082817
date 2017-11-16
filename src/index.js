import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeCount from './reducers/changeCount';
import createStore from './createStore'

const store = createStore(changeCount)
// console.log(store.getState(), "store.getState() from index.js");
// console.log(store, "store from index.js");



export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.dispatch({type: "@@INIT"})

//render()
