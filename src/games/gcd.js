import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const generateQuestionAndAnswer = () => {
  const num1 = (getRandomNumber(1, 10) * getRandomNumber(1, 10));
  const num2 = (getRandomNumber(1, 10) * getRandomNumber(1, 10));

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return [question, correctAnswer];
};

const startGcdGame = () => runGame(description, generateQuestionAndAnswer);

export default startGcdGame;
