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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/metro/Workspace/Ethereum/DC/pages/debts.js?entry';


var Dashboard = function (_Component) {
    (0, _inherits3.default)(Dashboard, _Component);

    function Dashboard(props) {
        (0, _classCallCheck3.default)(this, Dashboard);

        return (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this, props));
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'componentDidMount',
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

                                console.log(debts);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, 'Welcome to the Dashboard!'));
        }
    }]);

    return Dashboard;
}(_react.Component);

exports.default = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RlYnRzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsInJlbmRlciIsIkRhc2hib2FyZCIsInByb3BzIiwibWV0aG9kcyIsImdldERlcGxveWVkRGVidHMiLCJjYWxsIiwiZGVidHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTOzs7Ozs7O0ksQUFFSDt1Q0FDRjs7dUJBQUEsQUFBWSxPQUFNOzRDQUFBOzsySUFBQSxBQUNSLEFBQ1Q7Ozs7Ozs7Ozs7Ozs7dUNBRXVCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixtQixBQUFoQixBQUFtQzs7aUNBQWpEO0EsaURBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRVIsQUFDSjttQ0FBUyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNEO0FBREM7QUFBQSxhQUFBLGtCQUNELGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURSLEFBQVMsQUFDRCxBQUdYOzs7OztBLEFBYm1CLEFBZ0J4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZWJ0cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXRyby9Xb3Jrc3BhY2UvRXRoZXJldW0vREMifQ==