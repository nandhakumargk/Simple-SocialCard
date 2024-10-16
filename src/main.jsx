import { StrictMode } from 'react'
import { HashRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
