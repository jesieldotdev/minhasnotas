import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AppProvider } from './context/AppContext';
import { SnackbarProvider } from 'notistack';
import {Provider} from "react-redux"
import store from "./store/index"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
        </Provider>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
);
