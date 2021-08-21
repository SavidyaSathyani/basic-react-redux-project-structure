import React from 'react';
import PropTypes from 'prop-types';

//css
import './styles.scss';

const TestFunctionComponent = ({ testName, testAge }) => {
  if (!testAge || !testName) {
    return null;
  }

  return (
    <div className="test-functional-component" data-test="test-functional-component">
      <p>{testName}</p>
      <p>{testAge}</p>
    </div>
  );
};

TestFunctionComponent.propTypes = {
  testName: PropTypes.string,
  testAge: PropTypes.number,
};

export default TestFunctionComponent;
