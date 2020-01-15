webpackHotUpdate(6,{

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1294);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(494);

var _factory = __webpack_require__(1088);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(721);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(1300);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/metro/Workspace/Ethereum/DC/pages/records/new.js?entry';
//import 'https://github.com/web3-js/scrypt-shim';
//var scrypt = require('scrypt-shim');


var NewRecord = function (_Component) {
    (0, _inherits3.default)(NewRecord, _Component);

    function NewRecord() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NewRecord);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewRecord.__proto__ || (0, _getPrototypeOf2.default)(NewRecord)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            description: "",
            borrower: "",
            amount: "",
            errorMessage: "",
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createDebt(_this.state.amount, _this.state.borrower, _this.state.description).send({ from: accounts[0] }).then(console.log(accounts[0]));

                            case 8:

                                _routes.Router.pushRoute('/records');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ loading: false, errorMessage: _context.t0.message });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(NewRecord, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), ' ', _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, ' New Debt Record '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, ' Description'), _react2.default.createElement(_semanticUiReact.Form.Input, { width: 8, value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, ' Borrower'), _react2.default.createElement(_semanticUiReact.Form.Input, { width: 8, value: this.state.borrower,
                onChange: function onChange(event) {
                    return _this3.setState({ borrower: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, ' Amount'), _react2.default.createElement(_semanticUiReact.Input, { label: 'Wei', width: 8,
                labelPosition: 'right',
                value: this.state.amount,
                onChange: function onChange(event) {
                    return _this3.setState({ amount: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, ' Submit ')));
        }
    }]);

    return NewRecord;
}(_react.Component);

exports.default = NewRecord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3UmVjb3JkIiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImJvcnJvd2VyIiwiYW1vdW50IiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVEZWJ0Iiwic2VuZCIsImZyb20iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFHcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7QUFIdkI7QUFDQTs7O0ksQUFJTTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0Y7eUJBQVEsQUFDUyxBQUNiO3NCQUZJLEFBRU0sQUFDVjtvQkFISSxBQUdJLEFBQ1I7MEJBSkksQUFJVSxBQUNkO3FCLEFBTEksQUFLSztBQUxMLEFBQ0osaUIsQUFPSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh4QixBQUdQLEFBQWMsQUFBK0I7Z0RBSHRDO2dEQUFBO3VDQUtvQixjQUFBLEFBQUssSUFMekIsQUFLb0IsQUFBUzs7aUNBQTFCO0FBTEgsb0RBQUE7Z0RBQUE7dUNBTUcsa0JBQUEsQUFBUSxRQUFSLEFBQ0QsV0FBVyxNQUFBLEFBQUssTUFEZixBQUNxQixRQUFRLE1BQUEsQUFBSyxNQURsQyxBQUN3QyxVQUFVLE1BQUEsQUFBSyxNQUR2RCxBQUM2RCxhQUQ3RCxBQUVELEtBQUssRUFBQyxNQUFNLFNBRlgsQUFFSSxBQUFPLEFBQVMsTUFGcEIsQUFFeUIsS0FBSyxRQUFBLEFBQVEsSUFBSSxTQVI3QyxBQU1HLEFBRThCLEFBQVksQUFBUzs7aUNBRXpEOzsrQ0FBQSxBQUFPLFVBVkosQUFVSCxBQUFpQjtnREFWZDtBQUFBOztpQ0FBQTtnREFBQTtnRUFZRjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sY0FBYyxZQVo1QyxBQVlGLEFBQWMsQUFBb0M7O2lDQVpoRDtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWlCSDt5QkFDSjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQTs7OEJBQ0U7Z0NBREYsQUFDRTtBQUFBO0FBQUEsZ0JBQU0scUJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRFIsQUFDUSxBQUNSLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtDQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUIsR0FBRyxPQUFPLEtBQUEsQUFBSyxNQUFsQyxBQUF3QyxBQUNwQzswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBVSxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTdDLEFBQVMsQUFBZSxBQUE0QjtBQURsRTs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFHSTtBQUhKO2lDQUdLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSjtBQURJO0FBQUEsK0JBQ0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREksQUFDSixBQUNBLDRDQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUIsR0FBRyxPQUFPLEtBQUEsQUFBSyxNQUFsQyxBQUF3QyxBQUNwQzswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBVSxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBZSxBQUF5QjtBQUQvRDs4QkFBQTtnQ0FSUixBQU1ZLEFBRUosQUFHSTtBQUhKO2lDQUdLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSjtBQURJO0FBQUEsK0JBQ0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREksQUFDSixBQUNBLDRCQUFBLEFBQUMsd0NBQU8sT0FBUixBQUFjLE9BQU0sT0FBcEIsQUFBMkIsQUFDdkI7K0JBREosQUFDa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVUsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUF4QyxBQUFTLEFBQWUsQUFBdUI7QUFIN0Q7OEJBQUE7Z0NBYlIsQUFXWSxBQUVKLEFBS0o7QUFMSTtpQ0FLSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQWxCSixBQWtCSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDOzhCQUFBO2dDQUFBO0FBQUE7ZUF0QlIsQUFDSSxBQUVBLEFBbUJJLEFBSVg7Ozs7O0EsQUFyRG1CLEFBd0R4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWV0cm8vV29ya3NwYWNlL0V0aGVyZXVtL0RDIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/metro/Workspace/Ethereum/DC/pages/records/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/metro/Workspace/Ethereum/DC/pages/records/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/records/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi45OTNkNWQyODJkMmNmYWM2MzViZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVjb3Jkcy9uZXcuanM/NWI4ZDQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuLy9pbXBvcnQgJ2h0dHBzOi8vZ2l0aHViLmNvbS93ZWIzLWpzL3NjcnlwdC1zaGltJztcbi8vdmFyIHNjcnlwdCA9IHJlcXVpcmUoJ3NjcnlwdC1zaGltJyk7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmNsYXNzIE5ld1JlY29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBib3Jyb3dlcjogXCJcIixcbiAgICAgICAgYW1vdW50OiBcIlwiLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXG4gICAgICAgICAgICAgICAgLmNyZWF0ZURlYnQodGhpcy5zdGF0ZS5hbW91bnQsIHRoaXMuc3RhdGUuYm9ycm93ZXIsIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgLnNlbmQoe2Zyb206IGFjY291bnRzWzBdfSkudGhlbihjb25zb2xlLmxvZyhhY2NvdW50c1swXSkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvcmVjb3JkcycpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxici8+IDxoMz4gTmV3IERlYnQgUmVjb3JkIDwvaDM+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgd2lkdGg9ezh9IHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUgKHsgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQm9ycm93ZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCB3aWR0aD17OH0gdmFsdWU9e3RoaXMuc3RhdGUuYm9ycm93ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSAoeyBib3Jyb3dlcjogZXZlbnQudGFyZ2V0LnZhbHVlfSkgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBBbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgIGxhYmVsPVwiV2VpXCIgd2lkdGg9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUgKHsgYW1vdW50OiBldmVudC50YXJnZXQudmFsdWV9KSB9Lz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5PiBTdWJtaXQgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1JlY29yZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9yZWNvcmRzL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFBQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFLQTtBQUxBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==