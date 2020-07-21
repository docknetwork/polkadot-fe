"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.availableExtensions = void 0;
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// it would have been really good to import this from detect, however... not exported
const availableExtensions = [{
  browsers: {
    chrome: 'https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/'
  },
  desc: 'Basic account injection and signer',
  name: 'polkadot-js extension'
}].reduce((available, {
  browsers,
  desc,
  name
}) => {
  Object.entries(browsers).forEach(([browser, link]) => {
    available[browser].push({
      desc,
      link,
      name
    });
  });
  return available;
}, {
  chrome: [],
  firefox: []
});
exports.availableExtensions = availableExtensions;