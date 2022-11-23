import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

test('renders the Navbar component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
    <Provider store={store}>
      <Navbar />
    </Provider>,
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});