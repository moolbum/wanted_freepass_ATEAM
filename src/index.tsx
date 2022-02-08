import ReactDOM from 'react-dom';

import Board from './pages/Board';
import { Provider } from 'react-redux';
import store from './store/index';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Toggle from './components/Toggle/Toggle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Board />
        <Toggle />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
