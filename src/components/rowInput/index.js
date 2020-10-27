import React, { Component } from "react";
import InputField from "../inputField";

class RowInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { placeholder, value, name, type, label, onChange } = this.props;
    return (
      <div className="form-row">
        <div className="form-group col-md-6">
          {label}
          <InputField
            typeInput={type}
            nameInput={name}
            valueInput={value}
            placeholderInput={placeholder}
            onChangeInput={onChange}
          />
        </div>
      </div>
    );
  }
}

export default RowInput;
