webpackHotUpdate(5,{

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(795);

var _Layout2 = _interopRequireDefault(_Layout);

var _debt = __webpack_require__(1104);

var _debt2 = _interopRequireDefault(_debt);

var _web = __webpack_require__(725);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(564);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/metro/Workspace/Ethereum/DC/pages/records/details.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/metro/Workspace/Ethereum/DC/pages/records/details.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/records/details")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kNjA5YzMyZWRkMzg0OTM2YTM2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVjb3Jkcy9kZXRhaWxzLmpzP2Q1ZWRjYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERlYnQgZnJvbSAnLi4vLi4vZXRoZXJldW0vZGVidCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNsYXNzIERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGRlYnQgPSBEZWJ0KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGF3YWl0IGRlYnQubWV0aG9kcy5nZXREZXRhaWxzKCkuY2FsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxuICAgICAgbGVuZGVyOiBkZXRhaWxzWzBdLFxuICAgICAgYm9ycm93ZXI6IGRldGFpbHNbMV0sXG4gICAgICBhbW91bnQ6IGRldGFpbHNbMl0sXG4gICAgICBkZXNjcmlwdGlvbjogZGV0YWlsc1szXSxcbiAgICAgIGlzU2V0dGxlZDogZGV0YWlsc1s0XSxcbiAgICAgIGlzVmVyaWZpZWQ6IGRldGFpbHNbNV1cbiAgICB9O1xuICAgIH1cbiAgICByZW5kZXJEZXRhaWxzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmlzU2V0dGxlZCk7XG4gICAgY29uc3Qge1xuICAgICAgYWRkcmVzcywgIFxuICAgICAgbGVuZGVyLFxuICAgICAgYm9ycm93ZXIsXG4gICAgICBhbW91bnQsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGlzU2V0dGxlZCxcbiAgICAgIGlzVmVyaWZpZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgaXNWZXJpZmllZFN0cmluZyA9IGlzVmVyaWZpZWQ7XG4gICAgbGV0IGlzU2V0dGxlZFN0cmluZyA9IGlzU2V0dGxlZDtcbiAgICBpZiAoaXNWZXJpZmllZCA9PSBmYWxzZSkge1xuICAgICAgICBpc1ZlcmlmaWVkU3RyaW5nID0gJ0ZhbHNlJ1xuICAgIH0gZWxzZSB7IGlzVmVyaWZpZWRTdHJpbmcgPSAnVHJ1ZSd9XG4gICAgaWYgKGlzU2V0dGxlZCA9PSBmYWxzZSl7XG4gICAgICAgIGlzU2V0dGxlZFN0cmluZyA9ICdGYWxzZSdcbiAgICB9IGVsc2UgeyBpc1ZlcmlmaWVkU3RyaW5nID0gJ1RydWUnfVxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgIG1ldGE6ICg8ZGl2PjxiPkRlYnQgYW1vdW50OiA8L2I+e2Ftb3VudH0gIFdlaTwvZGl2PiksXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICg8ZGl2PlxuICAgICAgICAgPGI+IExlbmRlcjo8L2I+IHtsZW5kZXJ9IDxici8+XG4gICAgICAgICA8Yj4gYm9ycm93ZXI6IDwvYj57Ym9ycm93ZXJ9XG4gICAgICAgICA8YnIvPiA8Yj4gVmVyaWZpZWQ6IDwvYj4ge2lzVmVyaWZpZWRTdHJpbmd9IFxuICAgICAgICAgPGJyLz4gPGI+IFNldHRsZWQ6IDwvYj4ge2lzU2V0dGxlZFN0cmluZ30gXG4gICAgICAgICAgPC9kaXY+KSxcbiAgICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgfV1cblxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9Lz47XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5EZWJ0IENvbnRyYWN0IERldGFpbHMgIDwvaDQ+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJEZXRhaWxzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcmVjb3Jkcy9kZXRhaWxzLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFBQTtBQVNBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFaQTtBQUNBO0FBV0E7QUFBQTtBQUVBO0FBRkE7QUFBQTs7OztBQUtBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUF0REE7QUFBQTs7QUFFQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==