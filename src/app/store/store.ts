import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { reducer } from './reducers';
import { State } from './state';

// integrating Redux DevTools
declare let window: any;
const devToolsExtension: StoreEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__)
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;

// @ts-ignore
export const store = createStore<State>(reducer, compose(devToolsExtension) as StoreEnhancer);
