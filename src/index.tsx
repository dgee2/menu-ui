import { initializeIcons, PartialTheme, ThemeProvider } from '@fluentui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

initializeIcons();

const style: PartialTheme = {
  palette: {
    themePrimary: '#c02327',
    themeLighterAlt: '#fcf4f4',
    themeLighter: '#f5d5d6',
    themeLight: '#ecb2b4',
    themeTertiary: '#d96e72',
    themeSecondary: '#c7373c',
    themeDarkAlt: '#ac1f24',
    themeDark: '#911a1e',
    themeDarker: '#6b1316',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff'
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={style} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
