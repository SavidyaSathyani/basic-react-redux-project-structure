import testTypes from "./product.types";

export const testAction = test => ({
  type: testTypes.TEST_TYPE,
  payload: test,
});
