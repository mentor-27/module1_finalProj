import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.dataset.id = this.state.id;
    const $bold = document.createElement('b');
    $bold.textContent = `$${this.state.amount}`;
    const $deleteItem = document.createElement('button');
    $deleteItem.className = 'delete-button';
    $deleteItem.textContent = 'Удалить';
    this.$rootElement.innerHTML = `${new Date(this.state.date)
      .toLocaleString()
      .replaceAll('.', '/')} - `;
    this.$rootElement.appendChild($bold);
    this.$rootElement.appendChild($deleteItem);
    $deleteItem.addEventListener('click', this.handleRemove.bind(this));
  }

  handleRemove(event) {
    this.$rootElement.closest('.donate-item').remove();
    this.props.onRemove(this.state.id);
  }
}
