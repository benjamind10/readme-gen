const generateQuestions = require('../utils/generateQuestions');
const response = require('../utils/mocks/response');

test('Check for gif', () => {
  console.log(response.demo);
  expect(response.demo).toMatch(/\.(jpg|png|gif)\b/);
});
