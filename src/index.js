import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from "./reducers";
import {createStore} from "redux";

const store = createStore(rootReducer);
window.store = store;

ReactDOM.render(<Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>, document.getElementById('root'));
serviceWorker.unregister();
