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
            var _props = this.props,
                address = _props.address,
                lender = _props.lender,
                borrower = _props.borrower,
                amount = _props.amount,
                description = _props.description,
                isSettled = _props.isSettled;

            var isSettledString = isSettled;
            if (isSettled == false) {
                isSettledString = 'times circle';
            } else {
                isSettledString = 'check circle';
            }
            var items = [{
                header: _react2.default.createElement('h3', { style: { color: "#2185d0" }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }, address),
                meta: _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, 'Debt amount: '), amount, '  ETH'),
                description: _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }, _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, 'Description: '), description, ' ', _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }), _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, ' Lender:'), ' ', lender, ' ', _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }), _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, ' borrower: '), borrower, _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }), ' ', _react2.default.createElement('b', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, ' Settled: '), ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: isSettledString, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }), '  ', _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }), _react2.default.createElement('hr', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, size: 'small', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, ' Settle ')),
                fluid: true
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Debt Contract Details  '), this.renderDetails(), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Transaction Receipt')));
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
                                    amount: _web2.default.utils.fromWei(details[2], 'ether'),
                                    description: details[3],
                                    isSettled: details[4]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkRlYnQiLCJ3ZWIzIiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJEZXRhaWwiLCJwcm9wcyIsImFkZHJlc3MiLCJsZW5kZXIiLCJib3Jyb3dlciIsImFtb3VudCIsImRlc2NyaXB0aW9uIiwiaXNTZXR0bGVkIiwiaXNTZXR0bGVkU3RyaW5nIiwiaXRlbXMiLCJoZWFkZXIiLCJjb2xvciIsIm1ldGEiLCJmbHVpZCIsInJlbmRlckRldGFpbHMiLCJkZWJ0IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0RGV0YWlscyIsImNhbGwiLCJkZXRhaWxzIiwidXRpbHMiLCJmcm9tV2VpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFPOzs7Ozs7O0ksQUFFaEI7Ozs7Ozs7Ozs7O3dDQWNjO3lCQVFaLEtBUlksQUFRUDtnQkFSTyxBQUVkLGlCQUZjLEFBRWQ7Z0JBRmMsQUFHZCxnQkFIYyxBQUdkO2dCQUhjLEFBSWQsa0JBSmMsQUFJZDtnQkFKYyxBQUtkLGdCQUxjLEFBS2Q7Z0JBTGMsQUFNZCxxQkFOYyxBQU1kO2dCQU5jLEFBT2QsbUJBUGMsQUFPZCxBQUVGOztnQkFBSSxrQkFBSixBQUFzQixBQUN0QjtnQkFBSSxhQUFKLEFBQWlCLE9BQU0sQUFDbkI7a0NBQUEsQUFBa0IsQUFDckI7QUFGRCxtQkFFTyxBQUFFO2tDQUFBLEFBQWtCLEFBQWU7QUFDMUM7Z0JBQU07d0NBRU0sY0FBQSxRQUFJLE9BQU8sRUFBQyxPQUFaLEFBQVcsQUFBUTtrQ0FBbkI7b0NBQUEsQUFBaUM7QUFBakM7aUJBQUEsRUFEVixBQUNVLEFBQ1I7c0NBQU8sY0FBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsaUJBQUEsa0JBQUssY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUFMLEFBQUssQUFBcUIsa0JBQTFCLFFBRlQsQUFFUyxBQUNQOzZDQUNHLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0Q7QUFEQztBQUFBLGlCQUFBLGtCQUNELGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFEQyxBQUNELEFBQXFCLGtCQURwQixhQUNpQzs7a0NBQUE7b0NBRGpDLEFBQ2lDLEFBQ25DO0FBRG1DO0FBQUEsb0NBQ25DLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFGRSxBQUVGLGFBQWlCLEtBRmYsUUFFdUI7O2tDQUFBO29DQUZ2QixBQUV1QixBQUN6QjtBQUR5QjtBQUFBLG9DQUN6QixjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBSEUsQUFHRixBQUFtQixnQkFIakIsQUFJRjs7a0NBQUE7b0NBSkUsQUFJRjtBQUFBO0FBQUEsb0JBQU0scUJBQUEsY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUpKLEFBSUksZUFBa0IscUJBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVk7a0NBQVo7b0NBSnRCLEFBSXNCO0FBQUE7b0JBQWlDOztrQ0FBQTtvQ0FKdkQsQUFJdUQsQUFBSztBQUFMO0FBQUE7O2tDQUFLO29DQUo1RCxBQUk0RCxBQUM5RDtBQUQ4RDtBQUFBLG9DQUM5RCxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsTUFBaEIsQUFBcUI7a0NBQXJCO29DQUFBO0FBQUE7bUJBVEgsQUFJSyxBQUtGLEFBRUM7dUJBWk4sQUFBYyxBQUNaLEFBV1csQUFHYjtBQWRFLEFBQ0UsYUFGVTs7aURBZVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUVOO0FBRk07YUFBQTs7OztpQ0FJRSxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQU07OzhCQUFBO2dDQUFOLEFBQU0sQUFDTjtBQURNO0FBQUEsZ0NBQ04sY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNDLGlDQUZELEFBRUMsQUFBSyxBQUNOLGlDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBQ0ksQUFDQSxBQUdBLEFBSVA7Ozs7O2lILEFBdkQ0Qjs7Ozs7aUNBQ3ZCO0EsdUNBQU8sb0JBQUssTUFBQSxBQUFNLE0sQUFBWCxBQUFpQjs7dUNBRVIsS0FBQSxBQUFLLFFBQUwsQUFBYSxhLEFBQWIsQUFBMEI7O2lDQUExQztBOzs2Q0FFSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjs0Q0FBUSxRQUZILEFBRUcsQUFBUSxBQUNoQjs4Q0FBVSxRQUhMLEFBR0ssQUFBUSxBQUNsQjs0Q0FBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBbUIsQUFBUSxJQUo5QixBQUlHLEFBQThCLEFBQ3RDO2lEQUFhLFFBTFIsQUFLUSxBQUFRLEFBQ3JCOytDQUFXLFEsQUFOTixBQU1NLEFBQVE7QUFOZCxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFOZSxBQTJEckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlscy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXRyby9Xb3Jrc3BhY2UvRXRoZXJldW0vREMifQ==