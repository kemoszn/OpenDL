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
      errorMessage: ""
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
            lineNumber: 67
          }
        }, address),
        meta: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, 'Debt amount: '), amount, '  ETH'),
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, 'Description: '), description, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, ' Lender:'), ' ', lender, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, ' borrower: '), borrower, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), ' ', _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, ' Settled: '), ' ', _react2.default.createElement(_semanticUiReact.Icon, { name: isSettledString, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), '  ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSettle, error: !!this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, size: 'small', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, ' Settle '))),
        fluid: true
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Debt Contract Details  '), this.renderDetails(), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Transaction Receipt')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var debt, details;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                debt = (0, _debt2.default)(props.query.address);
                _context2.next = 3;
                return debt.methods.getDetails().call();

              case 3:
                details = _context2.sent;
                return _context2.abrupt('return', {
                  address: props.query.address,
                  lender: details[0],
                  borrower: details[1],
                  amount: _web2.default.utils.fromWei(details[2], 'ether'),
                  description: details[3],
                  isSettled: details[4]
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Detail;
}(_react.Component);

exports.default = Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY29yZHMvZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkRlYnQiLCJ3ZWIzIiwiRm9ybSIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTWVzc2FnZSIsIlJvdXRlciIsIkRldGFpbCIsInN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU2V0dGxlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsImRlYnQiLCJzZW5kVHJhbnNhY3Rpb24iLCJmcm9tIiwidG8iLCJsZW5kZXIiLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJhbW91bnQiLCJtZXRob2RzIiwic2V0dGxlRGVidCIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsImJvcnJvd2VyIiwiZGVzY3JpcHRpb24iLCJpc1NldHRsZWQiLCJpc1NldHRsZWRTdHJpbmciLCJpdGVtcyIsImhlYWRlciIsImNvbG9yIiwibWV0YSIsImZsdWlkIiwicmVuZGVyRGV0YWlscyIsInF1ZXJ5IiwiZ2V0RGV0YWlscyIsImNhbGwiLCJkZXRhaWxzIiwiZnJvbVdlaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBTSxBQUFRLEFBQU07O0FBQ25DLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDRjtlQUFRLEFBQ0csQUFDVDtvQixBQUZNLEFBRVE7QUFGUixBQUNOLGEsQUFrQkY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21C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LHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7c0JBQW5EO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7c0JBQWxEO3dCQURGLEFBQ0UsQUFDQTtBQURBOzRCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQyxNQUE2QyxNQUE3QyxBQUFrRDtzQkFBbEQ7d0JBQUE7QUFBQTtXQVhMLEFBSUssQUFLRixBQUVFLEFBR0Q7ZUFmTixBQUFjLEFBQ1osQUFjVyxBQUdiO0FBakJFLEFBQ0UsT0FGVTs7MkNBa0JQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFFTjtBQUZNO09BQUE7Ozs7NkJBSUUsQUFDTDs2QkFDSSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFNOztvQkFBQTtzQkFBTixBQUFNLEFBQ047QUFETTtBQUFBLDBCQUNOLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQyxpQ0FGRCxBQUVDLEFBQUssQUFDTixpQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUNJLEFBQ0EsQUFHQSxBQUlQOzs7Ozs2RyxBQW5GNEI7Ozs7O21CQUN2QjtBLHVCQUFPLG9CQUFLLE1BQUEsQUFBTSxNLEFBQVgsQUFBaUI7O3VCQUVSLEtBQUEsQUFBSyxRQUFMLEFBQWEsYSxBQUFiLEFBQTBCOzttQkFBMUM7QTs7MkJBRUssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7MEJBQVEsUUFGSCxBQUVHLEFBQVEsQUFDaEI7NEJBQVUsUUFITCxBQUdLLEFBQVEsQUFDbEI7MEJBQVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQW1CLEFBQVEsSUFKOUIsQUFJRyxBQUE4QixBQUN0QzsrQkFBYSxRQUxSLEFBS1EsQUFBUSxBQUNyQjs2QkFBVyxRLEFBTk4sQUFNTSxBQUFRO0FBTmQsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGTixBLEFBNUZxQjs7a0JBNEZyQixBQUFlIiwiZmlsZSI6ImRldGFpbHMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWV0cm8vV29ya3NwYWNlL0V0aGVyZXVtL0RDIn0=