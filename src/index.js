function add(num1, num2) {
  if (!num1 || !num2) {
    throw new Error('Numbers are required for adding');
  }

  return num1 + num2;
}

function div(num1, num2) {
  if (!num1 || !num2) {
    throw new Error('Numbers are required for dividing');
  }

  return num1 / num2;
}

module.exports = {
  add,
  div,
};
