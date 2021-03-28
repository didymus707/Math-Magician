import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';

describe('Home', () => {
  it('wraps content within a main tag', () => {
    const main = TestUtils.renderIntoDocument(
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>,
    );
    TestUtils.findRenderedDOMComponentWithTag(
      main,
      'main',
    );
  });
});
