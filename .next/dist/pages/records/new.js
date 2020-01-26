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
            redirectedAddress: "",
            txHash: ""
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
                                }).then(function (receipt) {
                                    return _this.setState({ txHash: receipt.transactionHash });
                                });

                            case 8:
                                console.log(_this.state.txHash);
                                _context.next = 11;
                                return _factory2.default.methods.createDebt(_web2.default.utils.toWei(_this.state.amount, 'ether'), _this.state.borrower, _this.state.description, _this.state.txHash).send({ from: accounts[0] }).then(function (receipt) {
                                    return _this.setState({ redirectedAddress: receipt.events.ContractCreated.returnValues[0] });
                                });

                            case 11:
                                _routes.Router.pushRoute('/records/' + _this.state.redirectedAddress);
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ loading: false, errorMessage: _context.t0.message });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 14]]);
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
                    lineNumber: 49
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Message, { compact: 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'exclamation circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), 'Note'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Make sure you\'re connected to ', _react2.default.createElement('a', { href: 'https://www.metamask.io', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'MetaMask'), ' or any wallet provider and have sufficient funds.'))), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { widths: 'equal', onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, ' Description'), _react2.default.createElement(_semanticUiReact.Form.Input, { width: 8, value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, ' Borrower'), _react2.default.createElement(_semanticUiReact.Form.Input, { width: 8, value: this.state.borrower,
                onChange: function onChange(event) {
                    return _this3.setState({ borrower: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, ' Amount'), _react2.default.createElement(_semanticUiReact.Input, { fluid: 'false', label: 'ETH',
                labelPosition: 'right',
                value: this.state.amount,
                onChange: function onChange(event) {
                    return _this3.setState({ amount: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, ' Send ')));
        }
    }]);

    return NewRecord;
}(_react.Component);

exports.default = NewRecord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkljb24iLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIk5ld1JlY29yZCIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJib3Jyb3dlciIsImFtb3VudCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJyZWRpcmVjdGVkQWRkcmVzcyIsInR4SGFzaCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNlbmRUcmFuc2FjdGlvbiIsImZyb20iLCJ0byIsInZhbHVlIiwidXRpbHMiLCJ0b1dlaSIsInRoZW4iLCJyZWNlaXB0IiwidHJhbnNhY3Rpb25IYXNoIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJjcmVhdGVEZWJ0Iiwic2VuZCIsImV2ZW50cyIsIkNvbnRyYWN0Q3JlYXRlZCIsInJldHVyblZhbHVlcyIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUN2QyxBQUFPLEFBQWE7Ozs7QUFHcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7QUFIdkI7QUFDQTs7O0ksQUFJTTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0Y7eUJBQVEsQUFDUyxBQUNiO3NCQUZJLEFBRU0sQUFDVjtvQkFISSxBQUdJLEFBQ1I7MEJBSkksQUFJVSxBQUNkO3FCQUxJLEFBS0ssQUFDVDsrQkFOSSxBQU1lLEFBQ25CO29CLEFBUEksQUFPSTtBQVBKLEFBQ0osaUIsQUFTSjtpR0FBVyxpQkFB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