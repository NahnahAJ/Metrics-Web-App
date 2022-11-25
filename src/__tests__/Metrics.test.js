import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Metrics from '../components/Metrics';

const renderFuction = () => {
  render(
    <Provider store={store}>
      <Metrics />
    </Provider>,
  );
};

test('Check if metrics component Renders', () => {
  renderFuction();
  const linkElement = screen.getAllByRole('generic');
  expect(linkElement.length).toBeGreaterThan(1);
});

test('renders the Metrics component snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Metrics />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
