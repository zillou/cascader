webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(212);


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-console */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _rcCascader = __webpack_require__(3);
	
	var _rcCascader2 = _interopRequireDefault(_rcCascader);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(165);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var addressOptions = [{
	  'label': '福建',
	  'value': 'fj',
	  'children': [{
	    'label': '福州',
	    'value': 'fuzhou',
	    'children': [{
	      'label': '马尾',
	      'value': 'mawei'
	    }]
	  }, {
	    'label': '泉州',
	    'value': 'quanzhou'
	  }]
	}, {
	  'label': '浙江',
	  'value': 'zj',
	  'children': [{
	    'label': '杭州',
	    'value': 'hangzhou',
	    'children': [{
	      'label': '余杭',
	      'value': 'yuhang'
	    }]
	  }]
	}, {
	  'label': '北京',
	  'value': 'bj',
	  'children': [{
	    'label': '朝阳区',
	    'value': 'chaoyang'
	  }, {
	    'label': '海淀区',
	    'value': 'haidian'
	  }]
	}];
	
	var defaultOptions = [{
	  'label': '福建',
	  'value': 'fj'
	}, {
	  'label': '福州',
	  'value': 'fuzhou'
	}, {
	  'label': '马尾',
	  'value': 'mawei'
	}];
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  getInitialState: function getInitialState() {
	    return {
	      inputValue: defaultOptions.map(function (o) {
	        return o.label;
	      }).join(', ')
	    };
	  },
	  onChange: function onChange(value, selectedOptions) {
	    console.log(value, selectedOptions);
	    this.setState({
	      inputValue: selectedOptions.map(function (o) {
	        return o.label;
	      }).join(', ')
	    });
	  },
	  render: function render() {
	    var defaultValue = defaultOptions.map(function (o) {
	      return o.value;
	    });
	    return _react2['default'].createElement(
	      _rcCascader2['default'],
	      { defaultValue: defaultValue, options: addressOptions, onChange: this.onChange },
	      _react2['default'].createElement('input', { value: this.state.inputValue, readOnly: true })
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=defaultValue.js.map