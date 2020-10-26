import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      typeInput,
      nameInput,
      valueInput,
      placeholderInput,
      onChangeInput,
      onClickInput,
    } = this.props;

    return (
      <input
        type={typeInput}
        name={nameInput}
        value={valueInput}
        placeholder={placeholderInput}
        onClick={onClickInput}
        onChange={onChangeInput}
      />
    );
  }
}

export default InputField;
