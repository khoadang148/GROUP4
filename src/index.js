import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
// import { Provider } from 'react-redux'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'antd/dist/reset.css';
// import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    // <Provider>

    // </Provider>
            <Router>
            <App/>
            </Router>

,document.getElementById("root"))