import React from 'react';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter, Route } from 'react-router-dom';
import Calculator from '../components/Calculator';

describe('Home', () => {
  it('wraps content within a div with class container', () => {
    const calculator = TestUtils.renderIntoDocument(
      <BrowserRouter>
        <Route exact path="/" component={Calculator} />
      </BrowserRouter>,
    );
    TestUtils.findRenderedDOMComponentWithClass(
      calculator,
      'calc-con',
    );
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Route exact path="/" component={Calculator} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
