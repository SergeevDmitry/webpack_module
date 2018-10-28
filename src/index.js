import $ from 'jquery';
import { Greeter } from './greeter';

const greeter = new Greeter();

const message = greeter.great('Hello', 'Webpack');

$('body').text(message);
