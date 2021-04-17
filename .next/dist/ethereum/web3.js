'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) !== undefined && (0, _typeof3.default)(window.web3) != undefined) {
    //we're in the browser and metamask is running
    web3 = new web3(window.web3.currentProvider);
} else {
    //we're on the server or user isn't running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/1d0ca15cd23f45d392029341b9c812b3');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwidW5kZWZpbmVkIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLFFBQU8sQUFBUCw2REFBTyxBQUFQLGFBQWtCLEFBQWxCLGFBQStCLHNCQUFPLE9BQU8sQUFBZCxTQUFzQixBQUF6RCxXQUFvRSxBQUNoRTtBQUNBO1dBQU8sSUFBSSxBQUFKLEtBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNIO0FBSEQsT0FHTyxBQUNIO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFBZ0MsQUFBaEMsQUFBakIsQUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQmluYXJ5SGlsbHMvRG9jdW1lbnRzL1BFUlNPTkFML0Jsb2NrY2hhaW4gcHJvamVjdHMva2lja3N0YXJ0In0=