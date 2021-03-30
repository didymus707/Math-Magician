import React from 'react';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter, Route } from 'react-router-dom';
import Quote from '../components/Quote';

describe('Quote', () => {
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

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Route exact path="/" component={Quote} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
