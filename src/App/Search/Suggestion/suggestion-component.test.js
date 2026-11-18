import React from 'react';
import { render } from '@testing-library/react';
import Suggestion from './suggestion-component';

describe('Suggestion Container', () => {
  const props = {
    movie: {
      title: 'my title',
      id: 22
    },
    actions: {
      addToLibrary: () => {}, 
      addToLibraryFav: () => {}, 
    }
  }
  it('display possible results', () => {
    const { unmount } = render(<Suggestion  { ...props} />);
    unmount();
  });

})