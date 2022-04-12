import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Provider is a component 

import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);

// we only need to provide the Redux store to the React app once, 
// and we provide it at the highest level in our React application
// to the top of our component tree where we render this root component 
// since our entire app needs access to the store
// you can wrap nested components with Provider, but only those wrapped
// compponents and their child components will have access to the Redux store 
// with access to the store, our components can get data out of the store, 
// aka set up a subscription, and dispatch actions 