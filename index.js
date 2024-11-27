const receivesAFunction = (callback) => {
    if (typeof callback === 'function') {
      callback();
    }
  };
  
  
  const returnsANamedFunction = () => {
    const myNamedFunction = () => {
      // Some logic here
    };
    return myNamedFunction;
  };
  
  
  const returnsAnAnonymousFunction = () => {
    return () => {
      // Some logic here
    };
  };
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };