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

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _reactDom = require('react-dom');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/metro/Workspace/Ethereum/DC/pages/records.js?entry';


var Dashboard = function (_Component) {
    (0, _inherits3.default)(Dashboard, _Component);

    function Dashboard() {
        (0, _classCallCheck3.default)(this, Dashboard);

        return (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).apply(this, arguments));
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'renderDebts',
        value: function renderDebts() {
            var items = this.props.debts.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, 'View details'),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Open Debts Ledger'), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Add Record',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), ' '), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, this.renderDebts()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var debts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedDebts().call();

                            case 2:
                                debts = _context.sent;
                                return _context.abrupt('return', { debts: debts });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Dashboard;
}(_react.Component);

exports.default = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiZmFjdG9yeSIsInJlbmRlciIsIkxheW91dCIsIndlYjMiLCJEYXNoYm9hcmQiLCJpdGVtcyIsInByb3BzIiwiZGVidHMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckRlYnRzIiwibWV0aG9kcyIsImdldERlcGxveWVkRGVidHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUzs7QUFDVCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7OztzQ0FTYSxBQUNYO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFLLG1CQUFXLEFBQzNDOzs0QkFBTyxBQUNLLEFBQ1I7aURBQWEsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHFCQUFBLEVBRlYsQUFFVSxBQUNiOzJCQUhKLEFBQU8sQUFHSSxBQUVkO0FBTFUsQUFDSDtBQUZSLEFBQWMsQUFRZCxhQVJjOztpREFRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdILEFBRUo7O21DQUFTLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ1Q7QUFEUztBQUFBLGFBQUEsa0JBQ1QsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDUTtBQURSO0FBQUEsK0JBQ1EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRFIsQUFDUSxBQUNBLHNDQUFBLEFBQUM7eUJBQUQsQUFDUSxBQUNSO3NCQUZBLEFBRUssQUFDTDt5QkFIQTs7OEJBQUE7Z0NBRlIsQUFFUTtBQUFBO0FBQ0EsZ0JBR0c7OzhCQUFBO2dDQU5YLEFBTVcsQUFBSztBQUFMO0FBQUE7OzhCQUFLO2dDQU5oQixBQU1nQjtBQUFBO0FBQUEsZ0JBUFAsQUFDVCxBQU9RLHNCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQU07QUFBTjtBQUFBLG9CQVJSLEFBQVMsQUFRRCxBQUFNLEFBQUssQUFLdEI7Ozs7Ozs7Ozs7Ozt1Q0FsQ3VCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixtQixBQUFoQixBQUFtQzs7aUNBQWpEO0E7aUVBR0MsRUFBQyxPLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ2YsQSxBQXZDd0I7O2tCQXVDeEIsQUFBZSIsImZpbGUiOiJyZWNvcmRzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21ldHJvL1dvcmtzcGFjZS9FdGhlcmV1bS9EQyJ9