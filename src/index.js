import { Greeter } from './greeter';

import styles from './style.css';

console.log(styles);

// const greeter = new Greeter();
//
// const message = greeter.great('Hello', 'Webpack');

const app = document.querySelector('#app');

const h1 = document.createElement('h1');
h1.textContent = 'Greet webpack';

app.appendChild(h1);
