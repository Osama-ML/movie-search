import { sayHi } from './utils.js';
import './components/Search/Seach-OML';
import './components/Input/Input-OML';
import './components/Button/Button-OML';
import './styles.css';

const result = sayHi();

const app = document.querySelector('#root');
const appChild = app.appendChild(document.createElement('div'));
appChild.textContent = result;
appChild.className = 'container';
