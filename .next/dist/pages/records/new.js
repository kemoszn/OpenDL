'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

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
            loading: false,
            redirectedAddress: ""
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
                                return _web2.default.eth.sendTransaction({
                                    from: accounts[0],
                                    to: _this.state.borrower,
                                    value: _web2.default.utils.toWei(_this.state.amount, 'ether')
                                });

                            case 8:
                                _context.next = 10;
                                return _factory2.default.methods.createDebt(_web2.default.utils.toWei(_this.state.amount, 'ether'), _this.state.borrower, _this.state.description).send({ from: accounts[0] }).then(function (receipt) {
                                    return _this.setState({ redirectedAddress: receipt.events.ContractCreated.returnValues[0] });
                                });

                            case 10:
                                _routes.Router.pushRoute('/records/' + _this.state.redirectedAddress);
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ loading: false, errorMessage: _context.t0.message });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 13]]);
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
                    lineNumber: 47
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, ' Description'), _react2.default.createElement(_semanticUiReact.Form.Input, { width: 8, value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, ' Borrower'), _react2.default.createElement(_semanticUiReact.Form.Input, { width: 8, value: this.state.borrower,
                onChange: function onChange(event) {
                    return _this3.setState({ borrower: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, ' Amount'), _react2.default.createElement(_semanticUiReact.Input, { label: 'ETH', width: 8,
                labelPosition: 'right',
                value: this.state.amount,
                onChange: function onChange(event) {
                    return _this3.setState({ amount: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, ' Send ')));
        }
    }]);

    return NewRecord;
}(_react.Component);

exports.default = NewRecord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3UmVjb3JkIiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImJvcnJvd2VyIiwiYW1vdW50IiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsInJlZGlyZWN0ZWRBZGRyZXNzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2VuZFRyYW5zYWN0aW9uIiwiZnJvbSIsInRvIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwibWV0aG9kcyIsImNyZWF0ZURlYnQiLCJzZW5kIiwidGhlbiIsInJlY2VpcHQiLCJldmVudHMiLCJDb250cmFjdENyZWF0ZWQiLCJyZXR1cm5WYWx1ZXMiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBYTs7OztBQUdwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7OztBQUh2QjtBQUNBOzs7SSxBQUlNOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFDRjt5QkFBUSxBQUNTLEFBQ2I7c0JBRkksQUFFTSxBQUNWO29CQUhJLEFBR0ksQUFDUjswQkFKSSxBQUlVLEFBQ2Q7cUJBTEksQUFLSyxBQUNUOytCLEFBTkksQUFNZTtBQU5mLEFBQ0osaUIsQUFRSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh4QixBQUdQLEFBQWMsQUFBK0I7Z0RBSHRDO2dEQUFBO3VDQUtvQixjQUFBLEFBQUssSUFMekIsQUFLb0IsQUFBUzs7aUNBQTFCO0FBTEgsb0RBQUE7Z0RBQUE7cURBT0csQUFBSyxJQUFMLEFBQVM7MENBQ0wsU0FEcUIsQUFDckIsQUFBUyxBQUNmO3dDQUFJLE1BQUEsQUFBSyxNQUZrQixBQUVaLEFBQ2Y7MkNBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixRQVZwQyxBQU9HLEFBQXlCLEFBR3BCLEFBQW9DO0FBSGhCLEFBQzNCLGlDQURFOztpQ0FQSDtnREFBQTt5REFhRyxBQUFRLFFBQVIsQUFDRCxXQUFXLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsUUFEdEMsQUFDVSxBQUFvQyxVQUFVLE1BQUEsQUFBSyxNQUQ3RCxBQUNtRSxVQUFVLE1BQUEsQUFBSyxNQURsRixBQUN3RixhQUR4RixBQUVELEtBQUssRUFBQyxNQUFNLFNBRlgsQUFFSSxBQUFPLEFBQVMsTUFGcEIsQUFHRCxLQUFLLFVBQUEsQUFBQyxTQUFEOzJDQUFhLE1BQUEsQUFBSyxTQUFTLEVBQUUsbUJBQW1CLFFBQUEsQUFBUSxPQUFSLEFBQWUsZ0JBQWYsQUFBK0IsYUFBL0UsQUFBYSxBQUFjLEFBQXFCLEFBQTRDO0FBaEJuRyxBQWFHLGlDQUFBOztpQ0FLTjsrQ0FBQSxBQUFPLHdCQUFzQixNQUFBLEFBQUssTUFsQi9CLEFBa0JILEFBQXdDO2dEQWxCckM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBb0JGOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsT0FBTyxjQUFjLFlBcEI1QyxBQW9CRixBQUFjLEFBQW9DOztpQ0FwQmhEO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBeUJIO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNFO0FBREY7QUFBQSxhQUFBOzs4QkFDRTtnQ0FERixBQUNFLEFBQ0Y7QUFERTtBQUFBLGdDQUNGLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtDQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUIsR0FBRyxPQUFPLEtBQUEsQUFBSyxNQUFsQyxBQUF3QyxBQUNwQzswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBVSxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTdDLEFBQVMsQUFBZSxBQUE0QjtBQURsRTs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFHSTtBQUhKO2lDQUdLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSjtBQURJO0FBQUEsK0JBQ0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREksQUFDSixBQUNBLDRDQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUIsR0FBRyxPQUFPLEtBQUEsQUFBSyxNQUFsQyxBQUF3QyxBQUNwQzswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBVSxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBZSxBQUF5QjtBQUQvRDs4QkFBQTtnQ0FSUixBQU1ZLEFBRUosQUFHSTtBQUhKO2lDQUdLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSjtBQURJO0FBQUEsK0JBQ0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREksQUFDSixBQUNBLDRCQUFBLEFBQUMsd0NBQU8sT0FBUixBQUFjLE9BQU0sT0FBcEIsQUFBMkIsQUFDdkI7K0JBREosQUFDa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVUsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUF4QyxBQUFTLEFBQWUsQUFBdUI7QUFIN0Q7OEJBQUE7Z0NBYlIsQUFXWSxBQUVKLEFBS0o7QUFMSTtpQ0FLSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQWxCSixBQWtCSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDOzhCQUFBO2dDQUFBO0FBQUE7ZUF0QlIsQUFDSSxBQUVBLEFBbUJJLEFBSVg7Ozs7O0EsQUE5RG1CLEFBaUV4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWV0cm8vV29ya3NwYWNlL0V0aGVyZXVtL0RDIn0=