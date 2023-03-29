import { Component } from 'react';
import { ButtonLoadMore } from './Button.styled';

class Button extends Component {
  state = {};
  render() {
    return (
      <ButtonLoadMore onClick={this.props.handleIncrement} type="button">
        Load more
      </ButtonLoadMore>
    );
  }
}

export default Button;
