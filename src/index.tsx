import ReactDOM from 'react-dom';

// import Board from './pages/Board';
// import { Provider } from 'react-redux';
// import store from './store/index';
// import { ThemeProvider } from 'styled-components';
// import theme from './styles/theme';
// import GlobalStyle from './styles/GlobalStyle';
import Board from './pages/Board/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Board />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
