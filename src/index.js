import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/header';
import { BrowserRouter } from 'react-router-dom';
import Postpage from './component/postpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </React.StrictMode>
);