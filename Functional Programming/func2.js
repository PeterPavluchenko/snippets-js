// Understand Functional Programming Terminology
// Callbacks are functions that are slipped into another function to decide invocation of the func

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';



const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const teaForGreenFCC = getTea(prepareGreenTea, 13);
const teaForBlackFCC = getTea(prepareBlackTea, 21);