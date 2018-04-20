const { assert: { equal, deepEqual, isFunction } } = require('chai');

const { getLatestProducts } = require('../controllers/homeCtrl');

describe('getLatestProducts', () => {
  it('should be a function', () => {
      isFunction(getLatestProducts);
  });
  it('should return an array', () => {
    return getLatestProducts().then(products => {
      console.log(products)
      isArray(products);
    });
  });
});
