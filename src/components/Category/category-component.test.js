import React from 'react';
import { render } from '@testing-library/react';
import Category from './category-component';

describe('Category Section', () => {
  const props = {
    status: {
      name: 'user list',
      list: []
    },
    movie: {
      title: 'my title',
      id: 22
    },
    actions: {
      addToLibrary: () => {}, 
      addToLibraryFav: () => {}, 
    }
  }
  it('display user list category', () => {
    const { unmount } = render(<Category  { ...props} />);
    unmount();
  });
  it('display favorite list category', () => {
    const { unmount } = render(<Category  { ...props} />);
    unmount();
  });

})