import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from './utils';
import App from './App';

const setUp = () => {
  const component = shallow(<App />);
  return component;
};

describe('App Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render withot errors', () => {
    expect(findByTestAttribute(component, 'appComponent').length).toBe(1);
  });
});