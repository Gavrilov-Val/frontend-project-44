import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => Array.from({ length }, (_, i) => start + step * i);

const generateQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(1, 10);
  const increment = getRandomNumber(1, 10);
  const hiddenNumber = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progressionArray = makeProgression(startNumber, increment, progressionLength);
  const correctAnswer = progressionArray[hiddenNumber - 1].toString();
  progressionArray[hiddenNumber - 1] = '..';
  const question = progressionArray.join(' ');
  return [question, correctAnswer];
};

const startProgressionGame = () => runGame(description, generateQuestionAndAnswer);

export default startProgressionGame;
