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

var _qrcode = require('qrcode.react');

var _qrcode2 = _interopRequireDefault(_qrcode);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _debt = require('../../ethereum/debt');

var _debt2 = _interopRequireDefault(_debt);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/metro/Workspace/Ethereum/DC/pages/records/details.js?entry';


var Detail = function (_Component) {
  (0, _inherits3.default)(Detail, _Component);

  function Detail() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Detail.__proto__ || (0, _getPrototypeOf2.default)(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      errorMessage: "",
      userAccount: "",
      from: "",
      to: "",
      value: "",
      blockNumber: "",
      timestamp: ""
    }, _this.onSettle = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, debt;
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
                return (0, _debt2.default)(_this.props.address);

              case 8:
                debt = _context.sent;
                _context.next = 11;
                return _web2.default.eth.sendTransaction({
                  from: accounts[0],
                  to: _this.props.lender,
                  value: _web2.default.utils.toWei(_this.props.amount, 'ether')
                });

              case 11:
                _context.next = 13;
                return debt.methods.settleDebt().send({ from: accounts[0] });

              case 13:

                _routes.Router.replaceRoute('/records/' + _this.props.address);
                _this.setState({ loading: false });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](2);

                _this.setState({ loading: false, errorMessage: _context.t0.message });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 17]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Detail, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _this3 = this;

        var accounts, timestamp, d, s, strLink1;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;

                this.setState({ userAccount: accounts[0], str: this.props.address });
                _context2.next = 6;
                return _web2.default.eth.getTransaction(this.props.txHash).then(function (data) {
                  return _this3.setState({ from: data.from, to: data.to,
                    value: _web2.default.utils.fromWei(data.value, "ether"),
                    blockNumber: data.blockNumber });
                });

              case 6:
                _context2.next = 8;
                return _web2.default.eth.getBlock(this.state.blockNumber);

              case 8:
                timestamp = _context2.sent;
                d = new Date(timestamp.timestamp * 1000);
                s = d.toUTCString();

                this.setState({ timestamp: s });
                strLink1 = 'https://rinkeby.etherscan.io/address/' + this.props.address;

                document.getElementById("link1").setAttribute("href", strLink1);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
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
      var addressQR = 'https://rinkeby.etherscan.io/address/' + address;
      var items = [{
        header: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react2.default.createElement('p', { style: { color: "#2185d0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, address), ' '), ' '),
        meta: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement('a', { id: 'link1', __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, 'See in Etherscan ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'external alternate', __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }))),
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react2.default.createElement(_semanticUiReact.Grid, { coloumns: 2, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, 'Debt Amount: '), amount, '  ETH ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, 'Description: '), description, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, ' Lender:'), ' ', lender, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, ' borrower: '), borrower, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }), ' ', _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, ' Settled: '), ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: isSettledString, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react2.default.createElement(_qrcode2.default, { size: 150, value: addressQR, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        })))), borrower == this.state.userAccount && !isSettled && _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSettle, error: !!this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, size: 'small', __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, ' Settle ')))),
        fluid: true
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      });
    }
  }, {
    key: 'renderTransaction',
    value: function renderTransaction() {
      var txHash = this.props.txHash;

      var txQR = 'https://rinkeby.etherscan.io/tx/' + txHash;
      var items = [{
        header: _react2.default.createElement('p', { style: { color: "#2185d0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, txHash)),
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, _react2.default.createElement(_semanticUiReact.Grid, { coloumns: 2, __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, ' From: '), ' ', this.state.from, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, 'To:'), ' ', this.state.to, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, 'Amount Paid: '), this.state.value, ' ETH ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, _react2.default.createElement(_qrcode2.default, { size: 100, value: txQR, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }))))),
        meta: '' + this.state.timestamp,
        fluid: true
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'address card outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), 'Debt Contract Details  '), this.renderDetails(), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), 'Transaction Receipt'), this.renderTransaction()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var debt, details;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                debt = (0, _debt2.default)(props.query.address);
                _context3.next = 3;
                return debt.methods.getDetails().call();

              case 3:
                details = _context3.sent;
                return _context3.abrupt('return', {
                  address: props.query.address,
                  lender: details[0],
                  borrower: details[1],
                  amount: _web2.default.utils.fromWei(details[2], 'ether'),
                  description: details[3],
                  isSettled: details[4],
                  txHash: details[5]
                });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Detail;
}(_react.Component);

exports.default = Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlFSQ29kZSIsIkxheW91dCIsIkRlYnQiLCJ3ZWIzIiwiRm9ybSIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTWVzc2FnZSIsIkdyaWQiLCJSb3V0ZXIiLCJEZXRhaWwiLCJzdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJ1c2VyQWNjb3VudCIsImZyb20iLCJ0byIsInZhbHVlIiwiYmxvY2tOdW1iZXIiLCJ0aW1lc3RhbXAiLCJvblNldHRsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJwcm9wcyIsImFkZHJlc3MiLCJkZWJ0Iiwic2VuZFRyYW5zYWN0aW9uIiwibGVuZGVyIiwidXRpbHMiLCJ0b1dlaSIsImFtb3VudCIsIm1ldGhvZHMiLCJzZXR0bGVEZWJ0Iiwic2VuZCIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJzdHIiLCJnZXRUcmFuc2FjdGlvbiIsInR4SGFzaCIsInRoZW4iLCJkYXRhIiwiZnJvbVdlaSIsImdldEJsb2NrIiwiZCIsIkRhdGUiLCJzIiwidG9VVENTdHJpbmciLCJzdHJMaW5rMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJib3Jyb3dlciIsImRlc2NyaXB0aW9uIiwiaXNTZXR0bGVkIiwiaXNTZXR0bGVkU3RyaW5nIiwiYWRkcmVzc1FSIiwiaXRlbXMiLCJoZWFkZXIiLCJjb2xvciIsIm1ldGEiLCJmbHVpZCIsInR4UVIiLCJyZW5kZXJEZXRhaWxzIiwicmVuZGVyVHJhbnNhY3Rpb24iLCJxdWVyeSIsImdldERldGFpbHMiLCJjYWxsIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FB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Yjs7Ozs7NkcsQUEzSDRCOzs7OzttQkFDdkI7QSx1QkFBTyxvQkFBSyxNQUFBLEFBQU0sTSxBQUFYLEFBQWlCOzt1QkFHUixLQUFBLEFBQUssUUFBTCxBQUFhLGEsQUFBYixBQUEwQjs7bUJBQTFDO0E7OzJCQUVLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCOzBCQUFRLFFBRkgsQUFFRyxBQUFRLEFBQ2hCOzRCQUFVLFFBSEwsQUFHSyxBQUFRLEFBQ2xCOzBCQUFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUFtQixBQUFRLElBSjlCLEFBSUcsQUFBOEIsQUFDdEM7K0JBQWEsUUFMUixBQUtRLEFBQVEsQUFDckI7NkJBQVcsUUFOTixBQU1NLEFBQVEsQUFDbkI7MEJBQVEsUSxBQVBILEFBT0csQUFBUTtBQVBYLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3SE4sQSxBQXhKcUI7O2tCQXdKckIsQUFBZSIsImZpbGUiOiJkZXRhaWxzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21ldHJvL1dvcmtzcGFjZS9FdGhlcmV1bS9EQyJ9