import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router/Router';
import registerServiceWorker from './registerServiceWorker';
import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import deDE from './../public/translations/de-DE.json';
import enUS from './../public/translations/en-US.json';

addLocaleData([...en, ...de]);

ReactDOM.render(
    <IntlProvider
        locale={navigator.language}
        messages={navigator.language.includes('de') ? deDE : enUS}>
        <Router/>
    </IntlProvider>, document.getElementById('root'));
registerServiceWorker();
