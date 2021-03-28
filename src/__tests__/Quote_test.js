import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter, Route } from 'react-router-dom';
import Quote from '../components/Home';

describe('Home', () => {
  it('wraps content within a div with class container', () => {
    const quote = TestUtils.renderIntoDocument(
      <BrowserRouter>
        <Route exact path="/" component={Quote} />
      </BrowserRouter>,
    );
    TestUtils.findRenderedDOMComponentWithClass(
      quote,
      'quo',
    );
  });
});
