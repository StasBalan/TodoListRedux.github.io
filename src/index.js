import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './components/reducer/reducer';
import App from './components/app';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(reducer, persistedState);
store.subscribe(()=>{
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
