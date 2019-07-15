import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {HashRouter, Route} from 'react-router-dom';

ReactDOM.render(
<HashRouter>
<Route path="/" component={App} />
</HashRouter>, document.getElementById('root')
);

serviceWorker.unregister();
