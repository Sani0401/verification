
const data = require('./generate');

const modifiedData = [...data];

/* To check the code works or not.

modifiedData[1] = {
  {
  _id: 1,
  name: 'Student 1',
  class: 'Class 12',
  rollNumber: 594,  
  age: 17 --> made the changes in the ages where the actual was 18
}
}
would give an error.
*/
module.exports = modifiedData;
