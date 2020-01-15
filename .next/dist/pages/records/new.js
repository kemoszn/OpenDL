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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3UmVjb3JkIiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImJvcnJvd2VyIiwiYW1vdW50IiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVEZWJ0Iiwic2VuZCIsImZyb20iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFHcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7QUFIdkI7QUFDQTs7O0ksQUFJTTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0Y7eUJBQVEsQUFDUyxBQUNiO3NCQUZJLEFBRU0sQUFDVjtvQkFISSxBQUdJLEFBQ1I7MEJBSkksQUFJVSxBQUNkO3FCLEFBTEksQUFLSztBQUxMLEFBQ0osaUIsQUFPSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh4QixBQUdQLEFBQWMsQUFBK0I7Z0RBSHRDO2dEQUFBO3VDQUtvQixjQUFBLEFBQUssSUFMekIsQUFLb0IsQUFBUzs7aUNBQTFCO0FBTEgsb0RBQUE7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