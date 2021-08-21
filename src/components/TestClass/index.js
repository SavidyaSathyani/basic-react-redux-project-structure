import React, { Component } from 'react';
import PropTypes from 'prop-types';

//css
import './styles.scss';

class TestClassComponent extends Component {
  render() {
    const {
      testName,
      testAge,
    } = this.props;

    if (!testName || !testAge) {
      return null;
    }

    return (
      <div className="test-class-component" data-test="test-class-component">
        <p>{testName}</p>
        <p>{testAge}</p>
      </div>
    );
  }
};

TestClassComponent.propTypes = {
  testName: PropTypes.string,
  testAge: PropTypes.number,
};

export default TestClassComponent;
