import React from 'react';
import { render } from '@testing-library/react';
import Search from './search-component';

describe('Search Component', () => {
  const props = {
     status: {
       fetched: [],
     },
     actions: {
       searchAction: () => {}
     }
  }
  it('Render without error', () => {
    const { unmount } = render(<Search  { ...props} />);
    unmount();
  });
  it('Allow search in input field', () => {
    const { unmount } = render(<Search  { ...props} />);
    unmount();
  });

})