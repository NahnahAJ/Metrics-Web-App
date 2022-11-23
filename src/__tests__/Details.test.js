import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/Details';

const renderFuction = () => {
  render(
    <Provider store={store}>
      <Details />
    </Provider>,
  );
};

test('Check if details component Renders', () => {
  renderFuction();
  const linkElement = screen.getAllByRole('generic');
  expect(linkElement.length).toBeGreaterThan(1);
});

test('renders the Details component snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Details />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
