import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
