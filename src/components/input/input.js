import * as React from 'react';
import { helpers, styled } from 'react-free-style';
import classnames from 'classnames';

import * as colors from '../../styles/colors';
import * as elements from '../../styles/elements';

class _Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      value: props.value
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.value === nextProps.value) return;

    this.setState({ value: nextProps.value });
  }

  render() {
    const {
      type,
      name,
      id,
      title,
      styles,
      className,
      readOnly,
      disabled,
      onKeyUp,
      onKeyDown,
      inputRef,
      inputClassName,
      focus,
      maxLength
    } = this.props;

    const _id = id || name;
    const onFocus = () => {
      this.setState({ focused: true });
      if (this.props.onFocus) this.props.onFocus();
    };

    const onBlur = () => {
      this.setState({ focused: false });
      if (this.props.onBlur) this.props.onBlur();
    };

    const onChange = e => {
      const value = e.target.value;
      this.setState({ value });
      this.props.onChange && this.props.onChange(value);
    };

    return (
      <div className={classnames(styles.container, className)}>
        <div className={classnames(styles.label, this.state.focused || this.state.value ? styles.float : undefined)}>
          {title}
        </div>
        <input
          autoComplete={'off'}
          onChange={onChange}
          onFocus={readOnly ? undefined : onFocus}
          onBlur={readOnly ? undefined : onBlur}
          value={this.state.value}
          maxLength={maxLength}
          className={classnames(styles.input, inputClassName)}
          type={type}
          name={name}
          id={_id}
          ref={inputRef}
          readOnly={readOnly}
          disabled={disabled}
          onKeyUp={onKeyUp}
          autoFocus={focus}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  }
}

const withStyles = styled({
  container: {
    position: 'relative'
  },
  input: helpers.merge(elements.input, {
    paddingTop: '0.9em',
    paddingBottom: '0.3em'
  }),
  label: {
    position: 'absolute',
    pointerEvents: 'none',
    top: '50%',
    left: 10,
    fontSize: '0.7em',
    fontWeight: 300,
    marginTop: '-0.5em',
    color: colors.contentColor,
    transition: '0.05s ease-in'
  },
  float: {
    marginTop: 0,
    top: '0.8em',
    fontSize: '0.5em',
    textTransform: 'uppercase'
  }
});

const Input = withStyles(_Input);
export { Input };
