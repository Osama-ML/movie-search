import { sayHi } from './utils.js';
import './Input/Input-OML';
import './styles.css';

const result = sayHi();

const app = document.querySelector('#root');
const appChild = app.appendChild(document.createElement('div'));
appChild.textContent = result;
appChild.className = 'container';
