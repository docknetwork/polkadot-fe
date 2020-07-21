"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "emptyLogo", {
  enumerable: true,
  get: function () {
    return _empty.default;
  }
});
exports.nodeLogos = exports.namedLogos = exports.extensionLogos = exports.chainLogos = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _kusama = _interopRequireDefault(require("./chains/kusama-128.gif"));

var _centrifuge = _interopRequireDefault(require("./nodes/centrifuge.png"));

var _edgewareCircle = _interopRequireDefault(require("./nodes/edgeware-circle.svg"));

var _encointerNotee = _interopRequireDefault(require("./nodes/encointer-notee.svg"));

var _encointerTeeproxy = _interopRequireDefault(require("./nodes/encointer-teeproxy.svg"));

var _nodle = _interopRequireDefault(require("./nodes/nodle.svg"));

var _polkadotCircle = _interopRequireDefault(require("./nodes/polkadot-circle.svg"));

var _polkadotJs = _interopRequireDefault(require("./nodes/polkadot-js.svg"));

var _substrateHexagon = _interopRequireDefault(require("./nodes/substrate-hexagon.svg"));

var _polkadotJs2 = _interopRequireDefault(require("./extensions/polkadot-js.svg"));

var _empty = _interopRequireDefault(require("./empty.svg"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// overrides based on the actual matched chain name
const chainLogos = [['Kusama', _kusama.default], // new name after CC3
['Kusama CC1', _kusama.default], ['Kusama CC2', _kusama.default], ['Kusama CC3', _kusama.default]].reduce((logos, [chain, logo]) => _objectSpread(_objectSpread({}, logos), {}, {
  [chain.toLowerCase()]: logo
}), {}); // overrides based on the actual software node type (all '-' converted to ' ')

exports.chainLogos = chainLogos;
const nodeLogos = [['centrifuge chain', _centrifuge.default], ['Centrifuge Chain Node', _centrifuge.default], ['Edgeware Node', _edgewareCircle.default], ['Encointer Node', _encointerNotee.default], ['Encointer Node noTEE', _encointerNotee.default], ['Encointer Node TEE proxy', _encointerTeeproxy.default], ['kulupu', _substrateHexagon.default], ['node-template', _substrateHexagon.default], ['Nodle Chain Node', _nodle.default], ['parity-polkadot', _polkadotCircle.default], ['polkadot-js', _polkadotJs.default], ['substrate-node', _substrateHexagon.default]].reduce((logos, [node, logo]) => _objectSpread(_objectSpread({}, logos), {}, {
  [node.toLowerCase().replace(/-/g, ' ')]: logo
}), {}); // overrides when we pass an explicit logo name

exports.nodeLogos = nodeLogos;
const namedLogos = {
  alexander: _polkadotCircle.default,
  centrifuge: _centrifuge.default,
  edgeware: _edgewareCircle.default,
  empty: _empty.default,
  kusama: _kusama.default,
  nodle: _nodle.default,
  polkadot: _polkadotCircle.default,
  substrate: _substrateHexagon.default,
  westend: _polkadotCircle.default
}; // extension logos

exports.namedLogos = namedLogos;
const extensionLogos = {
  'polkadot-js': _polkadotJs2.default
};
exports.extensionLogos = extensionLogos;