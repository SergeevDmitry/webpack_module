import { Greeter } from './greeter';

const greeter = new Greeter();

const message = greeter.great('Hello', 'Webpack');

console.log(message);
