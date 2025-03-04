import runGame, { getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(1, 10);
  const increment = getRandomNumber(1, 10);
  const hiddenNumber = getRandomNumber(1, 10);
  const progressionArray = Array.from({ length: 10 }, (start, i) => startNumber + (increment * i));
  const correctAnswer = progressionArray[hiddenNumber - 1].toString();
  progressionArray[hiddenNumber - 1] = '..';
  const question = progressionArray.join(' ');
  return [question, correctAnswer];
};

const startProgressionGame = () => runGame(description, generateQuestionAndAnswer);

export default startProgressionGame;
