import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => runGame(description, generateQuestionAndAnswer);

export default startPrimeGame;
