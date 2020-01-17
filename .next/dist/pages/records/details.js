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

var _debt = require('../../ethereum/debt');

var _debt2 = _interopRequireDefault(_debt);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/metro/Workspace/Ethereum/DC/pages/records/details.js?entry';


var Detail = function (_Component) {
    (0, _inherits3.default)(Detail, _Component);

    function Detail() {
        (0, _classCallCheck3.default)(this, Detail);

        return (0, _possibleConstructorReturn3.default)(this, (Detail.__proto__ || (0, _getPrototypeOf2.default)(Detail)).apply(this, arguments));
    }

    (0, _createClass3.default)(Detail, [{
        key: 'renderDetails',
        value: function renderDetails() {
            console.log(this.props.isSettled);
            var _props = this.props,
                address = _props.address,
                lender = _props.lender,
                borrower = _props.borrower,
                amount = _props.amount,
                description = _props.description,
                isSettled = _props.isSettled,
                isVerified = _props.isVerified;

            var isVerifiedString = isVerified;
            var isSettledString = isSettled;
            if (isVerified == false) {
                isVerifiedString = 'False';
            } else {
                isVerifiedString = 'True';
            }
            if (isSettled == false) {
                isSettledString = 'False';
            } else {
                isVerifiedString = 'True';
            }
            var items = [{
                header: address,
                meta: _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, 'Debt amount: '), amount, '  Wei'),
                description: _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }, _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, ' Lender:'), ' ', lender, ' ', _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }), _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }, ' borrower: '), borrower, _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }), ' ', _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }, ' Verified: '), ' ', isVerifiedString, _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }), ' ', _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }, ' Settled: '), ' ', isSettledString),
                fluid: true
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Debt Contract Details  '), this.renderDetails()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var debt, details;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                debt = (0, _debt2.default)(props.query.address);
                                _context.next = 3;
                                return debt.methods.getDetails().call();

                            case 3:
                                details = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    lender: details[0],
                                    borrower: details[1],
                                    amount: details[2],
                                    description: details[3],
                                    isSettled: details[4],
                                    isVerified: details[5]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Detail;
}(_react.Component);

exports.default = Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkRlYnQiLCJ3ZWIzIiwiQ2FyZCIsIkRldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImlzU2V0dGxlZCIsImFkZHJlc3MiLCJsZW5kZXIiLCJib3Jyb3dlciIsImFtb3VudCIsImRlc2NyaXB0aW9uIiwiaXNWZXJpZmllZCIsImlzVmVyaWZpZWRTdHJpbmciLCJpc1NldHRsZWRTdHJpbmciLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJmbHVpZCIsInJlbmRlckRldGFpbHMiLCJkZWJ0IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0RGV0YWlscyIsImNhbGwiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVM7Ozs7Ozs7SSxBQUVIOzs7Ozs7Ozs7Ozt3Q0FlYyxBQUNaO29CQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFETCxBQUNaLEFBQXVCO3lCQVN2QixLQVZZLEFBVVA7Z0JBVk8sQUFHZCxpQkFIYyxBQUdkO2dCQUhjLEFBSWQsZ0JBSmMsQUFJZDtnQkFKYyxBQUtkLGtCQUxjLEFBS2Q7Z0JBTGMsQUFNZCxnQkFOYyxBQU1kO2dCQU5jLEFBT2QscUJBUGMsQUFPZDtnQkFQYyxBQVFkLG1CQVJjLEFBUWQ7Z0JBUmMsQUFTZCxvQkFUYyxBQVNkLEFBRUY7O2dCQUFJLG1CQUFKLEFBQXVCLEFBQ3ZCO2dCQUFJLGtCQUFKLEFBQXNCLEFBQ3RCO2dCQUFJLGNBQUosQUFBa0IsT0FBTyxBQUNyQjttQ0FBQSxBQUFtQixBQUN0QjtBQUZELG1CQUVPLEFBQUU7bUNBQUEsQUFBbUIsQUFBTztBQUNuQztnQkFBSSxhQUFKLEFBQWlCLE9BQU0sQUFDbkI7a0NBQUEsQUFBa0IsQUFDckI7QUFGRCxtQkFFTyxBQUFFO21DQUFBLEFBQW1CLEFBQU87QUFDbkM7Z0JBQU07d0JBQ0osQUFDVSxBQUNSO3NDQUFPLGNBQUE7O2tDQUFBO29DQUFBLEFBQUs7QUFBTDtBQUFBLGlCQUFBLGtCQUFLLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFBTCxBQUFLLEFBQXFCLGtCQUExQixRQUZULEFBRVMsQUFDUDs2Q0FDRyxjQUFBOztrQ0FBQTtvQ0FBQSxBQUNGO0FBREU7QUFBQSxpQkFBQSxrQkFDRixjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBREUsQUFDRixhQUFpQixLQURmLFFBQ3VCOztrQ0FBQTtvQ0FEdkIsQUFDdUIsQUFDekI7QUFEeUI7QUFBQSxvQ0FDekIsY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUZFLEFBRUYsQUFBbUIsZ0JBRmpCLEFBR0Y7O2tDQUFBO29DQUhFLEFBR0Y7QUFBQTtBQUFBLG9CQUFNLHFCQUFBLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFISixBQUdJLGdCQUFvQixLQUh4QixBQUlGOztrQ0FBQTtvQ0FKRSxBQUlGO0FBQUE7QUFBQSxvQkFBTSxxQkFBQSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBSkosQUFJSSxlQUFtQixLQVI1QixBQUlLLEFBTUQ7dUJBWE4sQUFBYyxBQUNaLEFBVVcsQUFHYjtBQWJFLEFBQ0UsYUFGVTs7aURBY1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUVOO0FBRk07YUFBQTs7OztpQ0FJRSxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNDLGlDQUpMLEFBQ0ksQUFDQSxBQUVDLEFBQUssQUFJYjs7Ozs7aUgsQUE1RDRCOzs7OztpQ0FDdkI7QSx1Q0FBTyxvQkFBSyxNQUFBLEFBQU0sTSxBQUFYLEFBQWlCOzt1Q0FFUixLQUFBLEFBQUssUUFBTCxBQUFhLGEsQUFBYixBQUEwQjs7aUNBQTFDO0E7OzZDQUVLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCOzRDQUFRLFFBRkgsQUFFRyxBQUFRLEFBQ2hCOzhDQUFVLFFBSEwsQUFHSyxBQUFRLEFBQ2xCOzRDQUFRLFFBSkgsQUFJRyxBQUFRLEFBQ2hCO2lEQUFhLFFBTFIsQUFLUSxBQUFRLEFBQ3JCOytDQUFXLFFBTk4sQUFNTSxBQUFRLEFBQ25CO2dEQUFZLFEsQUFQUCxBQU9PLEFBQVE7QUFQZixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEROLEEsQUFoRXFCOztrQkFnRXJCLEFBQWUiLCJmaWxlIjoiZGV0YWlscy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXRyby9Xb3Jrc3BhY2UvRXRoZXJldW0vREMifQ==