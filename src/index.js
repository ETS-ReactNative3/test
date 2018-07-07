import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



// const element = <SayFullName name="Alex" surname="Fedorov" link="vk.com" />

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
