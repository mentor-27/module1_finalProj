import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    };
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    const $inputLabel = document.createElement('label');
    $inputLabel.className = 'donate-form__input-label';
    $inputLabel.textContent = 'Введите сумму в $';
    const $donateInput = document.createElement('input');
    $donateInput.className = 'donate-form__donate-input';
    $donateInput.name = 'amount';
    $donateInput.type = 'number';
    $donateInput.max = '100';
    $donateInput.min = '1';
    $donateInput.required = 'true';
    const $submitButton = document.createElement('button');
    $submitButton.className = 'donate-form__submit-button';
    $submitButton.type = 'submit';
    $submitButton.disabled = true;
    $submitButton.textContent = 'Задонатить';
    $inputLabel.appendChild($donateInput);
    this.$rootElement.appendChild($inputLabel);
    this.$rootElement.appendChild($submitButton);
    this.$donateInput = $donateInput;
    this.$submitButton = $submitButton;
    this.$donateInput.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  get isValid() {
    return +this.state.amount >= 1 && +this.state.amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$submitButton.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(+this.state.amount);
    this.state.amount = '';
    this.$donateInput.value = '';
  }
}
