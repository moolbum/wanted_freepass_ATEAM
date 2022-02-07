import { createStore } from 'redux';
import rootReducer from './module/index';

const store = createStore(rootReducer);

export default store;
