import { App } from './components';
import './index.css';

document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(new App().$rootElement);
});
