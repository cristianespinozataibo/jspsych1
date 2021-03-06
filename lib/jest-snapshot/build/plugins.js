'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getSerializers = exports.addSerializer = void 0;

var _prettyFormat = _interopRequireDefault(require('pretty-format'));

var _mock_serializer = _interopRequireDefault(require('./mock_serializer'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent,
  AsymmetricMatcher
} = _prettyFormat.default.plugins;
let PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  _mock_serializer.default,
  AsymmetricMatcher
]; // Prepend to list so the last added is the first tested.

const addSerializer = plugin => {
  PLUGINS = [plugin].concat(PLUGINS);
};

exports.addSerializer = addSerializer;

const getSerializers = () => PLUGINS;

exports.getSerializers = getSerializers;
