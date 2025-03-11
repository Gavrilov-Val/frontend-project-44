import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const divisorsList = (num) => {
  const divisors = [];
  let divisor = 2;
  let number = num;
  while (number >= 2) {
    if (number % divisor === 0) {
      divisors.push(divisor);
      number /= divisor;
    } else {
      divisor += 1;
    }
  }
  return divisors;
};

const isPrime = (number) => divisorsList(number).length === 1;

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => runGame(description, generateQuestionAndAnswer);

export default startPrimeGame;
