import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    fab, 
    faGitSquare, 
    faTwitterSquare, 
    faFacebookSquare,
    faLinkedin,
    faSkype
} from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import {faFile } from '@fortawesome/free-regular-svg-icons'
library.add(
    fab, 
    faCheckSquare, 
    faCoffee, 
    faFile,
    faGitSquare,
    faTwitterSquare,
    faFacebookSquare,
    faLinkedin,
    faSkype,
    faAngleDoubleRight
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
