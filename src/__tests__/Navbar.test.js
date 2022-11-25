import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';

test('renders the Navbar component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
      ,
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
