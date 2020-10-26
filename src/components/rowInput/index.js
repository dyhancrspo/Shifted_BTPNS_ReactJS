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
      <div className="">
        <div className="">{label}</div>
        <div className="form-group">
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
