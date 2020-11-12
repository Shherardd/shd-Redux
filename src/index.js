import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';

let theme = localStorage.getItem("tema")
let dataset = document.getElementsByTagName('HTML')[0]
if(theme){
  dataset.dataset.theme = theme
}else{
  dataset.dataset.theme = 'light'
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
