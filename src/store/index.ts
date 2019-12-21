import { createStore } from 'redux';
import reducer from 'store/reducers';

import { IStore } from './types';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: IStore) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {}
};

const initialState: IStore = loadState() || {
  activeNote: 0,
  notes: [
    {
      comments: [{ color: '#e66465', content: 'This is example' }],
      title: 'example'
    }
  ]
};
const store = createStore(reducer, initialState);
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
