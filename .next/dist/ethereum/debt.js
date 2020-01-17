'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Debt = require('./build/Debt.json');

var _Debt2 = _interopRequireDefault(_Debt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Debt2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlYnQuanMiXSwibmFtZXMiOlsid2ViMyIsIkRlYnQiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQixBQUFqQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDeEI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsZUFBSyxBQUFoQixBQUF0QixZQUFrRCxBQUFsRCxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJkZWJ0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21ldHJvL1dvcmtzcGFjZS9FdGhlcmV1bS9EQyJ9