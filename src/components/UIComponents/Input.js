import React, { PureComponent } from 'react';

class FloatingInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : '',
      isFocused: '',
      isOpen: false
    };
  };

  componentDidUpdate(prevProps) {
    if (Object.keys(this.props).indexOf('value') !== -1 && this.props.value !== prevProps.value && this.props.value !== this.state.value) {
      this.setState({ value: this.props.value });
    };
  };

  onChange = (value) => {
    this.setState({ value }, () => {
      this.props.onChange && this.props.onChange(value);
    });
  };

  onFocus = () => {
    this.setState({ isFocused: true }, () => {
      this.props.onFocus && this.props.onFocus(this.state.value);
    });
  };

  onBlur = () => {
    this.setState({ isFocused: false }, () => {
      this.props.onBlur && this.props.onBlur(this.state.value);
    });
  };

  render() {
    const { value, isFocused, isOpen } = this.state;
    const { disabled, type, className, label, maxLength } = this.props;
    return (
      <div className={`floating floating-input ${!!disabled ? 'disabled' : ''} ${type || ''}`}>
        <input {...this.props}
          type={isOpen ? 'text' : type}
          value={value}
          onChange={(e) => this.onChange(e.target.value)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className={`sp-input ${value && value.toString() !== '' && 'is-filled'} ${className || ''}`}
        />
        <label className={(value !== '' || isFocused) ? 'focused' : ''}>{label || ''}</label>
        <span className="character-length">{maxLength && `${value.length}/${maxLength}`}</span>
        {type === 'password' &&
          <i className={`reveal-icon fas fa-eye${isOpen ? '-slash' : ''}`} onClick={() => this.setState({ isOpen: !isOpen })} />
        }
      </div>
    );
  };
};

export default FloatingInput;