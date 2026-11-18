import React from 'react';
import { render } from '@testing-library/react';
import App from '../App/app-component';

describe('App Component', () => {
  const props = {
    category: { userMovies: [], userMoviesFav: [] },
    search: { fetched: [] }
  }

  it('renders DOM without crashing', () => {
    const { unmount } = render(<App  { ...props}  />);
    unmount();
  });

})