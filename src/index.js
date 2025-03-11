import readlineSync from 'readline-sync';

const runGame = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
