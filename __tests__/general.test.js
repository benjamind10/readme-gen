const generateQuestions = require('../utils/generateQuestions');

test('Check for gif', () => {
  const result = generateQuestions();

  expect(result).toBeTruthy();
});
