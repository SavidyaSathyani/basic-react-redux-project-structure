import testTypes from './test.types';

const INITIAL_STATE = {
  test: true,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case testTypes.TEST_TYPE:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
