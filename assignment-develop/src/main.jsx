import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import SnackbarCloseButton from '@/components/atoms/snackbar-close-button/snackbar-close-button.component';

import { store } from '@/app/store';

import './main.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        classes={{
          containerRoot: 'custom-snackbar',
        }}
        action={key => <SnackbarCloseButton snackbarKey={key} />}
        preventDuplicate
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
