import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from "clayful/client-js"
import axios from "axios";
import "./css/auth.css";


clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjMyYTI0OWIxNTBiYzQ0NjNmMDIyNDE1YzZlMjFiNWQzMTUzMDUwMDZiNzYxMTdhZjFhOTY2OTJjOWI1NmIxMGIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQxOTcyMzI3LCJzdG9yZSI6Ilo3M0pTNVgyNkxSRy5MMkoyREg5NUU0S1UiLCJzdWIiOiJRSzVFOE1BNENWS1UifQ.JViM-3VTzyChLrmB0JOxUPEdaxxFk12olhqo9OfTNeQ'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
