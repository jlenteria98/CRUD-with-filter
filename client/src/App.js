import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from './component/main/MainLayout';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact component={MainLayout} path="/" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
