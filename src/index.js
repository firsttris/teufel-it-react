import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import registerServiceWorker from './registerServiceWorker';
import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import deDE from './assets/translations/de-DE.json'
import enUS from './assets/translations/en-US.json'

addLocaleData([...en, ...es]);

ReactDOM.render(
    <IntlProvider
        locale={navigator.language}
        messages={navigator.language.includes('de') ? deDE : enUS}>
        <Routing/>
    </IntlProvider>, document.getElementById('root'));
registerServiceWorker();
