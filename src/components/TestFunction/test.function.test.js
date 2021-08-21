import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttribute } from '../../utils';
import TestFunctionComponent from './index';

const setUp = (props = {}) => {
  const component = shallow(<TestFunctionComponent {...props} />);
  return component;
};

describe('Test Component', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {

      const expectedProps = {
        testName: 'Test Name',
        testAge: 20,
      };
      const propErr = checkProps(TestFunctionComponent, expectedProps);
      expect(propErr).toBeUndefined();
    });

  });

  describe('With props', () => {

    let component;
    beforeEach(() => {
      const props = {
        testName: 'Test Name',
        testAge: 20,
      };

      component = setUp(props);
    });

    it('Should render a test componet', () => {
      expect(findByTestAttribute(component, 'test-functional-component').length).toBe(1);
    });

  });

  describe('Without props', () => {

    let component
    beforeEach(() => {
      component = setUp();
    });

    it('Should not render a test componet', () => {
      expect(findByTestAttribute(component, 'test-functional-component').length).toBe(0);
    });

  });
});
