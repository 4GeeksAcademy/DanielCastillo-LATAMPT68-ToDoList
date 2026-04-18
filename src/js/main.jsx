import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css'
import { List } from './components/List';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List/>
  </React.StrictMode>,
)
