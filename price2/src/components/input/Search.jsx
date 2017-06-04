import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Input from './Input';
import Icon from '../icon';

export default class Search extends React.Component {
  static defaultProps = {
    prefixCls: 'ant-input-search',
    onSearch() {},
  };
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['large' | 'default' | 'small']),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    name: PropTypes.string,
  }
  onSearch = () => {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(this.input.refs.input.value);
    }
    this.input.refs.input.focus();
  }
  render() {
    const { className, prefixCls, ...others } = this.props;
    delete (others as any).onSearch;
    const searchSuffix = (
      <Icon
        className={`${prefixCls}-icon`}
        onClick={this.onSearch}
        type="search"
      />
    );
    return (
      <Input
        onPressEnter={this.onSearch}
        {...others}
        suffix={searchSuffix}
        className={classNames(prefixCls, className)}
        ref={node => this.input = node}
      />
    );
  }
}
