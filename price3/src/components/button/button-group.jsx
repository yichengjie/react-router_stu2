import React from 'react';
import classNames from 'classnames';
export let ButtonSize = 'small' | 'large';

export default function ButtonGroup(props) {
  const { prefixCls = 'ant-btn-group', size = '', className, ...others } = props;
  // large => lg
  // small => sm
  let sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
    default:
      break;
  }

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
  }, className);

  return <div {...others} className={classes} />;
}


