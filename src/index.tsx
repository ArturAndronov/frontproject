import React from 'react';
import ReactDOM from 'react-dom';
import { isThrowStatement } from 'typescript';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Theme from './pages/components/Layout';
import ThemeFont from './pages/components/LayoutFont';
import Test from './pages/Teachers/components/TeacherContent/test';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <ThemeFont>
        <App />
      </ThemeFont>
    </Theme>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
