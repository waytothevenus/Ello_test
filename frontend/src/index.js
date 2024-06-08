import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// third-party
import { Provider as ReduxProvider } from 'react-redux';

// scroll bar
import 'simplebar/dist/simplebar.css';

// apex-chart
import 'assets/third-party/apex-chart.css';
import 'assets/third-party/react-table.css';

// project import
import App from './App';
import { store } from 'store';
// import { ConfigProvider } from 'contexts/ConfigContext';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </ApolloProvider>
);

reportWebVitals();
