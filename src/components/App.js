import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    const $totalAmount = document.createElement('h1');
    $totalAmount.className = 'total-amount';
    $totalAmount.textContent = `Итого: $`;
    const $total = document.createElement('span');
    $total.textContent = this.state.total;
    $totalAmount.appendChild($total);
    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    const donateList = new List();
    this.$rootElement.appendChild($totalAmount);
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.$rootElement.appendChild(donateList.$rootElement);
    this.$total = $total;
    this.$donateList = donateList;
  }

  calculate() {
    this.state.total = this.state.donates.reduce((acc, { state }) => acc + state.amount, 0);
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount, onRemove: this.onItemRemove.bind(this) });
    this.state.donates.push(item);
    this.$donateList.addItem(item);
    this.calculate();
    this.$total.textContent = this.state.total;
  }

  onItemRemove(id) {
    this.state.donates = this.state.donates.filter(({ state }) => state.id !== id);
    this.calculate();
    this.$total.textContent = this.state.total;
  }
}
