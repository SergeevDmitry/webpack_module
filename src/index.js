import { Greeter } from './greeter.js'; 

const greeter = new Greeter();

const message = greeter.great('Hello', 'Webpack');

console.log(message);
