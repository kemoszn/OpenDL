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
      var items = [{
        header: _react2.default.createElement('p', { style: { color: "#2185d0", textSize: "10px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, address), ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'copy outline', __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        })),
        meta: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement('a', { id: 'link1', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, 'See in Etherscan ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'external alternate', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }))),
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, 'Debt Amount: '), amount, '  ETH ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, 'Description: '), description, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, ' Lender:'), ' ', lender, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, ' borrower: '), borrower, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }), ' ', _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, ' Settled: '), ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: isSettledString, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }), borrower == this.state.userAccount && !isSettled && _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSettle, error: !!this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, size: 'small', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, ' Settle ')))),
        fluid: true
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      });
    }
  }, {
    key: 'renderTransaction',
    value: function renderTransaction() {
      var txHash = this.props.txHash;

      var items = [{
        header: _react2.default.createElement('p', { style: { color: "#2185d0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, txHash)),
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, ' From: '), ' ', this.state.from, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, 'To:'), ' ', this.state.to, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, 'Amount Paid: '), this.state.value, ' ETH'),
        meta: '' + this.state.timestamp,
        fluid: true
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'address card outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), 'Debt Contract Details  '), this.renderDetails(), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkRlYnQiLCJ3ZWIzIiwiRm9ybSIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTWVzc2FnZSIsIlJvdXRlciIsIkRldGFpbCIsInN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInVzZXJBY2NvdW50IiwiZnJvbSIsInRvIiwidmFsdWUiLCJibG9ja051bWJlciIsInRpbWVzdGFtcCIsIm9uU2V0dGxlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsImRlYnQiLCJzZW5kVHJhbnNhY3Rpb24iLCJsZW5kZXIiLCJ1dGlscyIsInRvV2VpIiwiYW1vdW50IiwibWV0aG9kcyIsInNldHRsZURlYnQiLCJzZW5kIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInN0ciIsImdldFRyYW5zYWN0aW9uIiwidHhIYXNoIiwidGhlbiIsImRhdGEiLCJmcm9tV2VpIiwiZ2V0QmxvY2siLCJkIiwiRGF0ZSIsInMiLCJ0b1VUQ1N0cmluZyIsInN0ckxpbmsxIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImJvcnJvd2VyIiwiZGVzY3JpcHRpb24iLCJpc1NldHRsZWQiLCJpc1NldHRsZWRTdHJpbmciLCJpdGVtcyIsImhlYWRlciIsImNvbG9yIiwidGV4dFNpemUiLCJtZXRhIiwiZmx1aWQiLCJyZW5kZXJEZXRhaWxzIiwicmVuZGVyVHJhbnNhY3Rpb24iLCJxdWVyeSIsImdldERldGFpbHMiLCJjYWxsIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FB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R0EsQUFDQyw2QkFOTCxBQUNJLEFBQ0EsQUFJQyxBQUFLLEFBSWI7Ozs7OzZHLEFBckc0Qjs7Ozs7bUJBQ3ZCO0EsdUJBQU8sb0JBQUssTUFBQSxBQUFNLE0sQUFBWCxBQUFpQjs7dUJBR1IsS0FBQSxBQUFLLFFBQUwsQUFBYSxhLEFBQWIsQUFBMEI7O21CQUExQztBOzsyQkFFSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjswQkFBUSxRQUZILEFBRUcsQUFBUSxBQUNoQjs0QkFBVSxRQUhMLEFBR0ssQUFBUSxBQUNsQjswQkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBbUIsQUFBUSxJQUo5QixBQUlHLEFBQThCLEFBQ3RDOytCQUFhLFFBTFIsQUFLUSxBQUFRLEFBQ3JCOzZCQUFXLFFBTk4sQUFNTSxBQUFRLEFBQ25COzBCQUFRLFEsQUFQSCxBQU9HLEFBQVE7QUFQWCxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFoQ2UsQUFrSXJCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImRldGFpbHMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWV0cm8vV29ya3NwYWNlL0V0aGVyZXVtL0RDIn0=