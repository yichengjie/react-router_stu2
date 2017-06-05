import React,{Component,cloneElement} from 'react' ;
import PropTypes from 'prop-types';
import classNames from 'classnames';
import assign from 'object-assign';
import omit from 'omit.js';
import './style/index.jsx'; 


function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}


class Input extends Component{
    static defaultProps = {
        disabled: false,
        prefixCls: 'ant-input',
    };

    static propTypes = {
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        size: PropTypes.oneOf(['small', 'default', 'large']),
        disabled: PropTypes.bool,
        value: PropTypes.any,
        defaultValue: PropTypes.any,
        className: PropTypes.string,
        addonBefore: PropTypes.node,
        addonAfter: PropTypes.node,
        prefixCls: PropTypes.string,
        onPressEnter: PropTypes.func,
        onKeyDown: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        prefix: PropTypes.node,
        suffix: PropTypes.node,
    };
    state = {
        isFocus: false,
    };

    
    handleKeyDown = (e) => {
        const { onPressEnter, onKeyDown } = this.props;
        if (e.keyCode === 13 && onPressEnter) {
            onPressEnter(e);
        }
        if (onKeyDown) {
            onKeyDown(e);
        }
    }

    handleInputChange =(e) => {
        let {onChange} = this.props ;
        onChange && onChange(value) ;
    }

    focus() {
        this.refs.input.focus();
    }

    renderLabeledInput(children) {
        const props = this.props;
        // Not wrap when there is not addons
        if (!props.addonBefore && !props.addonAfter) {
            return children;
        }

        const wrapperClassName = `${props.prefixCls}-group`;
        const addonClassName = `${wrapperClassName}-addon`;
        const addonBefore = props.addonBefore ? (
            <span className={addonClassName}>
                {props.addonBefore}
            </span>
        ) : null;

        const addonAfter = props.addonAfter ? (
            <span className={addonClassName}>
                {props.addonAfter}
            </span>
        ) : null;

        const className = classNames(`${props.prefixCls}-wrapper`, {
            [wrapperClassName]: (addonBefore || addonAfter),
        });

        const node = (
            <span className={className}>
                {addonBefore}
                {children}
                {addonAfter}
            </span>
        );

        // Need another wrapper for changing display:table to display:inline-block
        if (addonBefore || addonAfter) {
            return <span className={`${props.prefixCls}-group-wrapper`}>{node}</span>;
        }
        return node;
    }

    renderLabeledIcon(children) {
        const { props } = this;
            if (!('prefix' in props || 'suffix' in props)) {
            return children;
        }
        const prefix = props.prefix ? (
            <span className={`${props.prefixCls}-prefix`}>
                {props.prefix}
            </span>
        ) : null;
        const suffix = props.suffix ? (
            <span className={`${props.prefixCls}-suffix`}>
                {props.suffix}
            </span>
        ) : null;
        return (
            <span className={`${props.prefixCls}-affix-wrapper`} style={props.style}>
                {prefix}
                {cloneElement(children, { style: null })}
                {suffix}
            </span>
        );
    }

    renderInput() {
        const props = assign({}, this.props);
        // Fix https://fb.me/react-unknown-prop
        const otherProps = omit(this.props, [
            'prefixCls',
            'onPressEnter',
            'addonBefore',
            'addonAfter',
            'prefix',
            'suffix',
            'onChange'
        ]);

        const prefixCls = props.prefixCls;
        const inputClassName = classNames(prefixCls, {
            [`${prefixCls}-sm`]: props.size === 'small',
            [`${prefixCls}-lg`]: props.size === 'large',
        }, props.className);

        if ('value' in props) {
            otherProps.value = fixControlledValue(props.value);
            // Input elements must be either controlled or uncontrolled,
            // specify either the value prop, or the defaultValue prop, but not both.
            delete otherProps.defaultValue;
        }
        return this.renderLabeledIcon(
            <input type="text" 
                {...otherProps}
                className={inputClassName}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleInputChange}
                ref="input"
            />,
        );
    }
    render() {
        return this.renderLabeledInput(this.renderInput());
    }
}

export default Input ;