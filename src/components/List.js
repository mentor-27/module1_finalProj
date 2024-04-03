import { Component } from '../core/Component';

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';
    const $title = document.createElement('h2');
    $title.className = 'donates-container__title';
    $title.textContent = 'Список донатов';
    const $donates = document.createElement('div');
    $donates.className = 'donates-container__donates';
    this.$rootElement.appendChild($title);
    this.$rootElement.appendChild($donates);
    this.$donates = $donates;
  }

  addItem(item) {
    this.$donates.appendChild(item.$rootElement);
  }
}
