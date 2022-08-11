const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

var getRandEvent = () => {
  let event = Math.floor(Math.random() * 3);
  if (event === 0) {
    return 'Marathon';
  } else if (event === 1) {
    return 'Triathlon';
  } else if (event === 2) {
    return 'Pentathlon';
  }
};

var getTrainingDays = (event) => {
  let days
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

var logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

var logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};


logEvent(name, event);
logTime(name, days);
 
logEvent(name2, event2);
logTime(name2, days2);
