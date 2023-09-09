import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

function renderWithRouter(component, { route = '/' } = {}) {
  const history = createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(
      <Router history={ history }>
        {component}
      </Router>,
    ),
    history,
  };
}

export default renderWithRouter;
