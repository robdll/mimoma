import React from 'react';
import { render } from '@testing-library/react';
import Card from './movie-card-component';

describe('Search Component', () => {
  const props = {
     movie: {
       url: [],
     },
     actions: {
       searchAction: () => {}
     }
  }
  it('Render without error', () => {
    const { unmount } = render(<Card  { ...props} />);
    unmount();
  });
  it('use fallback cover', () => {
    const { unmount } = render(<Card  { ...props} />);
    unmount();
  });

})