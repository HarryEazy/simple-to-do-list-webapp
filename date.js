//jshint esversion:6

// function that returns the date in a specified format
// created to practice writing modules and understanding them

// export the functions
// new parenthesis required as we are not calling the function
// we are just exporting the function as a whole
// this will bind the getDate function to date.getDate
// where date is the const name that required the module
exports.getDate = function() {
  // get date
  const today = new Date();

  // object that we use for param for function today.toLocaleDateString()
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-GB", options);
};

// function that only returns the day it is

// this will bind the getDay dunction to date.getDay
// where date is the const name that required the module
exports.getDay = function () {
  // get date
  const today = new Date();
  // object that we use for param for function today.toLocaleDateString()
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-GB", options);
};
