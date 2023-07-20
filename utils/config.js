require('dotenv').config();

const SONAR_TOKEN = process.env.SONAR_TOKEN;
const SONAR_SERVER = process.env.SONAR_SERVER;

console.log('TEST');
console.log(SONAR_TOKEN);

module.exports = {
  SONAR_TOKEN,
  SONAR_SERVER,
};
