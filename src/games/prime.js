import runGame, { getRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// eslint-disable-next-line max-len
const primeNumArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const isPrime = (number) => primeNumArr.includes(number);

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => runGame(description, generateQuestionAndAnswer);

export default startPrimeGame;
