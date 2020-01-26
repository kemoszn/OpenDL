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
                console.log(_this.props.address);
                //console.log(this.props.query.address);
                console.log(debt);

                _routes.Router.replaceRoute('/records/' + _this.props.address);
                _this.setState({ loading: false });
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context['catch'](2);

                _this.setState({ loading: false, errorMessage: _context.t0.message });

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 19]]);
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

        var accounts, timestamp, d, s;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;

                this.setState({ userAccount: accounts[0] });
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

                console.log(this.state.timestamp);

              case 13:
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
      console.log(borrower);
      console.log(this.state.userAccount);
      var items = [{
        header: _react2.default.createElement('h3', { style: { color: "#2185d0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, address),
        meta: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, 'Debt Amount: '), amount, '  ETH'),
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, 'Description: '), description, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, ' Lender:'), ' ', lender, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, ' borrower: '), borrower, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }), ' ', _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, ' Settled: '), ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: isSettledString, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }), borrower == this.state.userAccount && !isSettled && _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSettle, error: !!this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, size: 'small', __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, ' Settle ')))),
        fluid: true
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      });
    }
  }, {
    key: 'renderTransaction',
    value: function renderTransaction() {
      var txHash = this.props.txHash;

      var items = [{
        header: _react2.default.createElement('h4', { style: { color: "#2185d0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, txHash),
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, ' From: '), ' ', this.state.from, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, 'To:'), ' ', this.state.to, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, 'Amount Paid: '), this.state.value, ' ETH'),
        meta: '' + this.state.timestamp,
        fluid: true
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'address card outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), 'Debt Contract Details  '), this.renderDetails(), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 136
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkRlYnQiLCJ3ZWIzIiwiRm9ybSIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTWVzc2FnZSIsIlJvdXRlciIsIkRldGFpbCIsInN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInVzZXJBY2NvdW50IiwiZnJvbSIsInRvIiwidmFsdWUiLCJibG9ja051bWJlciIsInRpbWVzdGFtcCIsIm9uU2V0dGxlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsImRlYnQiLCJzZW5kVHJhbnNhY3Rpb24iLCJsZW5kZXIiLCJ1dGlscyIsInRvV2VpIiwiYW1vdW50IiwibWV0aG9kcyIsInNldHRsZURlYnQiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJnZXRUcmFuc2FjdGlvbiIsInR4SGFzaCIsInRoZW4iLCJkYXRhIiwiZnJvbVdlaSIsImdldEJsb2NrIiwiZCIsIkRhdGUiLCJzIiwidG9VVENTdHJpbmciLCJib3Jyb3dlciIsImRlc2NyaXB0aW9uIiwiaXNTZXR0bGVkIiwiaXNTZXR0bGVkU3RyaW5nIiwiaXRlbXMiLCJoZWFkZXIiLCJjb2xvciIsIm1ldGEiLCJmbHVpZCIsInJlbmRlckRldGFpbHMiLCJyZW5kZXJUcmFuc2FjdGlvbiIsInF1ZXJ5IiwiZ2V0RGV0YWlscyIsImNhbGwiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBTTs7QUFDbkMs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Y0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBRlMsQUFFVCxBQUFxQix1QkFBQSxBQUFLLE1BRmpCLEFBRXVCLE9BSnZDLEFBRWdCLEFBR2Q7bUJBQVMsS0FBQSxBQUFLLE1BTGhCLEFBS3NCLEFBQ3BCO2VBUEosQUFBYyxBQUNaLEFBTVMsQUFFWDtBQVJFLEFBQ0UsT0FGVTsyQ0FTUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ0w7NkJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBTTs7b0JBQUE7c0JBQU4sQUFBTSxBQUNOO0FBRE07QUFBQSwwQkFDTixjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBSixBQUFJO0FBQUE7VUFESixBQUNBLEFBQ0MsaUNBRkQsQUFFQyxBQUFLLEFBQ04saUNBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEseUJBQUksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUosQUFBSTtBQUFBO1VBSEosQUFHQSxBQUNDLDZCQU5MLEFBQ0ksQUFDQSxBQUlDLEFBQUssQUFJYjs7Ozs7NkcsQUExRzRCOzs7OzttQkFDdkI7QSx1QkFBTyxvQkFBSyxNQUFBLEFBQU0sTSxBQUFYLEFBQWlCOzt1QkFHUixLQUFBLEFBQUssUUFBTCxBQUFhLGEsQUFBYixBQUEwQjs7bUJBQTFDO0E7OzJCQUVLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCOzBCQUFRLFFBRkgsQUFFRyxBQUFRLEFBQ2hCOzRCQUFVLFFBSEwsQUFHSyxBQUFRLEFBQ2xCOzBCQUFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUFtQixBQUFRLElBSjlCLEFBSUcsQUFBOEIsQUFDdEM7K0JBQWEsUUFMUixBQUtRLEFBQVEsQUFDckI7NkJBQVcsUUFOTixBQU1NLEFBQVEsQUFDbkI7MEJBQVEsUSxBQVBILEFBT0csQUFBUTtBQVBYLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQWpDZSxBQXdJckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlscy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXRyby9Xb3Jrc3BhY2UvRXRoZXJldW0vREMifQ==