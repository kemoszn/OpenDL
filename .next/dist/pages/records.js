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

var _routes = require('../routes');

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
                    description: _react2.default.createElement(_routes.Link, { route: '/records/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    }, 'View Campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Open Debts Ledger'), _react2.default.createElement(_routes.Link, { route: '/records/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, ' ', _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Add Record',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }), '  ')), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), this.renderDebts()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiZmFjdG9yeSIsInJlbmRlciIsIkxheW91dCIsIndlYjMiLCJMaW5rIiwiRGFzaGJvYXJkIiwiaXRlbXMiLCJwcm9wcyIsImRlYnRzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJEZWJ0cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZERlYnRzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztzQ0FTYSxBQUNYO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFLLG1CQUFXLEFBQzNDOzs0QkFBTyxBQUNLLEFBQ1I7aURBQ0ksQUFBQyw4QkFBSyxxQkFBTixBQUF5QjtzQ0FBekI7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFKTCxBQUdDLEFBQ0ksQUFHUjsyQkFQSixBQUFPLEFBT0ksQUFFZDtBQVRVLEFBQ0g7QUFGUixBQUFjLEFBWWQsYUFaYzs7aURBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHSCxBQUVKOzttQ0FBUyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNUO0FBRFM7QUFBQSxhQUFBLGtCQUNULGNBQUE7OzhCQUFBO2dDQUFBLEFBQ1E7QUFEUjtBQUFBLCtCQUNRLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURSLEFBQ1EsQUFDRCxzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQUkscUJBQUEsQUFBQzt5QkFBRCxBQUNLLEFBQ1I7c0JBRkcsQUFFRSxBQUNMO3lCQUhHOzs4QkFBQTtnQ0FBSixBQUFJO0FBQUE7QUFDSCxnQkFKUixBQUVPLEFBQ0EsUUFLUzs7OEJBQUE7Z0NBUmhCLEFBUWdCLEFBQ1A7QUFETztBQUFBLHFCQVRoQixBQUFTLEFBQ1QsQUFTUyxBQUFLLEFBTWpCOzs7Ozs7Ozs7Ozs7dUNBekN1QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsbUIsQUFBaEIsQUFBbUM7O2lDQUFqRDtBO2lFQUdDLEVBQUMsTyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFMUyxBQThDeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVjb3Jkcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXRyby9Xb3Jrc3BhY2UvRXRoZXJldW0vREMifQ==