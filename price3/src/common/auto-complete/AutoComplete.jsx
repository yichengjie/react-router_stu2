/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import ClickOutside from 'react-click-outside';
import { Component,PropTypes } from '../libs';
import Input from '../input';
import Suggestions from './Suggestions';
//import PropTypes from 'prop-types';

class AutoComplete extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      inputValue: props.value,
      isFocus: false,
      suggestions: [],
      loading: false,
      highlightedIndex: -1
    };
  }

  getChildContext() {
    return {
      component: this
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ inputValue: props.value });
  }

  componentDidUpdate() {
    const visible = this.suggestionVisible();
    const reference = ReactDOM.findDOMNode(this.inputNode);

    if (reference instanceof HTMLElement) {
      setTimeout(() => {
        this.suggestionsNode.onVisibleChange(visible, reference.offsetWidth);
      })
    }
  }

  getData(queryStringg){
    this.setState({ loading: true });

    this.props.fetchSuggestions(queryString, (suggestions) => {
      this.setState({ loading: false });

      if (Array.isArray(suggestions)) {
        this.setState({ suggestions });
      }
    });
  }

  handleChange(value) {
    this.setState({ inputValue: value });

    if (!this.props.triggerOnFocus && !value) {
      this.setState({ suggestions: [] }); return;
    }

    this.getData(value);
  }

  handleFocus(){
    this.setState({ isFocus: true });

    if (this.props.triggerOnFocus) {
      this.getData(this.state.inputValue);
    }
  }

  handleBlur() {
    // 因为 blur 事件处理优先于 select 事件执行
    setTimeout(() => {
      this.setState({ isFocus: false });
    }, 100);
  }

  handleKeyEnter(highlightedIndex) {
    if (this.suggestionVisible() && highlightedIndex >= 0 && highlightedIndex < this.state.suggestions.length) {
      this.select(this.state.suggestions[highlightedIndex]);
    }
  }

  handleClickOutside() {
    if (this.state.isFocus) {
      this.setState({ isFocus: false });
    }
  }

  select(item) {
    this.setState({ inputValue: item.value }, () => {
      this.setState({ suggestions: [] });
    });

    if (this.props.onSelect) {
      this.props.onSelect(item);
    }
  }

  highlight(index){
    if (!this.suggestionVisible() || this.state.loading) return;
    if (index < 0) index = 0;
    if (index >= this.state.suggestions.length) {
      index = this.state.suggestions.length - 1;
    }
    const reference = ReactDOM.findDOMNode(this.suggestionsNode);
    if (reference instanceof HTMLElement) {
      const suggestion = document.querySelector('.el-autocomplete-suggestion__wrap');
      const suggestionList = document.querySelectorAll('.el-autocomplete-suggestion__list li');
      if (suggestion instanceof HTMLElement && suggestionList instanceof NodeList) {
        let highlightItem = suggestionList[index];
        let scrollTop = suggestion.scrollTop;
        let offsetTop = highlightItem.offsetTop;

        if (offsetTop + highlightItem.scrollHeight > (scrollTop + suggestion.clientHeight)) {
          suggestion.scrollTop += highlightItem.scrollHeight;
        }

        if (offsetTop < scrollTop) {
          suggestion.scrollTop -= highlightItem.scrollHeight;
        }

        this.setState({ highlightedIndex: index });
      }
    }
  }

  /* Computed Methods */

  suggestionVisible() {
    const suggestions = this.state.suggestions;
    const isValidData = Array.isArray(suggestions) && suggestions.length > 0;

    return (isValidData || this.state.loading) && this.state.isFocus;
  }

  onKeyDown(e) {
    const { highlightedIndex } = this.state;

    switch (e.keyCode) {
      case 13:
        this.handleKeyEnter(highlightedIndex);
        break;
      case 38:
        this.highlight(highlightedIndex - 1)
        break;
      case 40:
        this.highlight(highlightedIndex + 1);
        break;
      default:
        break;
    }
  }

  render() {
    const { disabled, placeholder, name, size, icon, append, prepend, onIconClick, popperClass } = this.props;
    const { inputValue, suggestions } = this.state;

    return (
      <div style={this.style()} className={this.className('el-autocomplete')}>
        <Input
          ref={node => this.inputNode = node}
          value={inputValue}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          size={size}
          icon={icon}
          prepend={prepend}
          append={append}
          onIconClick={onIconClick}
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
        />
        <Suggestions
          ref={node => this.suggestionsNode = node}
          className={this.classNames(popperClass)}
          suggestions={suggestions}
        />
      </div>
    )
  }
}

AutoComplete.defaultProps = {
    triggerOnFocus: true,
};

AutoComplete.childContextTypes = {
  component: PropTypes.any
};

AutoComplete.propTypes = {
  popperClass: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  triggerOnFocus: PropTypes.bool,
  fetchSuggestions: PropTypes.func,
  onSelect: PropTypes.func,
  onIconClick:PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  append: PropTypes.element,
  prepend: PropTypes.element,
}

export default ClickOutside(AutoComplete);
