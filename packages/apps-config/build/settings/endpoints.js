"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function createDev(t) {
  return [{
    dnslink: 'local',
    info: 'local',
    text: t('rpc.local', 'Local Node (Own, 127.0.0.1:9944)', {
      ns: 'apps-config'
    }),
    value: 'ws://127.0.0.1:9944/'
  }];
}

function createLive(t) {
  return [{
    dnslink: 'polkadot',
    info: 'polkadot',
    text: t('rpc.polkadot.parity', 'Polkadot (Live, hosted by Parity)', {
      ns: 'apps-config'
    }),
    value: 'wss://rpc.polkadot.io'
  }, {
    dnslink: 'polkadot',
    info: 'polkadot',
    text: t('rpc.polkadot.w3f', 'Polkadot (Live, hosted by Web3 Foundation)', {
      ns: 'apps-config'
    }),
    value: 'wss://cc1-1.polkadot.network'
  }, {
    dnslink: 'kusama',
    info: 'kusama',
    text: t('rpc.kusama.parity', 'Kusama (Polkadot Canary, hosted by Parity)', {
      ns: 'apps-config'
    }),
    value: 'wss://kusama-rpc.polkadot.io/'
  }, {
    dnslink: 'kusama',
    info: 'kusama',
    text: t('rpc.kusama.w3f', 'Kusama (Polkadot Canary, hosted by Web3 Foundation)', {
      ns: 'apps-config'
    }),
    value: 'wss://cc3-5.kusama.network/'
  }, {
    dnslink: 'kusama',
    info: 'kusama',
    text: t('rpc.kusama.ava', 'Kusama (Polkadot Canary, user-run public nodes; see https://status.cloud.ava.do/)', {
      ns: 'apps-config'
    }),
    value: 'wss://kusama.polkadot.cloud.ava.do/'
  }, {
    dnslink: 'centrifuge',
    info: 'centrifuge',
    text: t('rpc.centrifuge', 'Centrifuge (Mainnet, hosted by Centrifuge)', {
      ns: 'apps-config'
    }),
    value: 'wss://fullnode.centrifuge.io'
  }, {
    dnslink: 'edgeware',
    info: 'edgeware',
    text: t('rpc.edgeware', 'Edgeware (Mainnet, hosted by Commonwealth Labs)', {
      ns: 'apps-config'
    }),
    value: 'wss://mainnet1.edgewa.re'
  }, {
    dnslink: 'kulupu',
    info: 'substrate',
    text: t('rpc.kulupu', 'Kulupu (Kulupu Mainnet, hosted by Kulupu)', {
      ns: 'apps-config'
    }),
    value: 'wss://rpc.kulupu.network/ws'
  }];
}

function createTest(t) {
  return [{
    dnslink: 'westend',
    info: 'westend',
    text: t('rpc.westend', 'Westend (Polkadot Testnet, hosted by Parity)', {
      ns: 'apps-config'
    }),
    value: 'wss://westend-rpc.polkadot.io'
  }, {
    info: 'edgeware',
    text: t('rpc.berlin', 'Berlin (Edgeware Testnet, hosted by Commonwealth Labs)', {
      ns: 'apps-config'
    }),
    value: 'wss://berlin1.edgewa.re'
  }, {
    info: 'substrate',
    text: t('rpc.flamingfir', 'Flaming Fir (Substrate Testnet, hosted by Parity)', {
      ns: 'apps-config'
    }),
    value: 'wss://substrate-rpc.parity.io/'
  }, {
    info: 'nodle',
    text: t('rpc.arcadia', 'Arcadia (Nodle Testnet, hosted by Nodle)', {
      ns: 'apps-config'
    }),
    value: 'wss://arcadia1.nodleprotocol.io/'
  }, {
    info: 'datahighway',
    isDisabled: true,
    text: t('rpc.datahighway.harbour', 'Harbour (DataHighway Testnet, hosted by MXC)', {
      ns: 'apps-config'
    }),
    value: 'wss://testnet-harbour.datahighway.com'
  }];
}

function createCustom(t) {
  var _process$env, _process_env;

  const WS_URL = (typeof process !== 'undefined' ? (_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env.WS_URL : undefined) || (typeof window !== 'undefined' ? (_process_env = window.process_env) === null || _process_env === void 0 ? void 0 : _process_env.WS_URL : undefined);
  return WS_URL ? [{
    isHeader: true,
    text: t('rpc.custom', 'Custom environment', {
      ns: 'apps-config'
    }),
    value: ''
  }, {
    info: 'WS_URL',
    text: t('rpc.custom.entry', 'Custom {{WS_URL}}', {
      ns: 'apps-config',
      replace: {
        WS_URL
      }
    }),
    value: WS_URL
  }] : [];
} // The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../logos, specifically in namedLogos
//   text: The text to display on teh dropdown
//   value: The actual hosted secure websocket endpoint


function create(t) {
  return [...createCustom(t), {
    isHeader: true,
    text: t('rpc.header.live', 'Live networks', {
      ns: 'apps-config'
    }),
    value: ''
  }, ...createLive(t), {
    isHeader: true,
    text: t('rpc.header.test', 'Test networks', {
      ns: 'apps-config'
    }),
    value: ''
  }, ...createTest(t), {
    isHeader: true,
    text: t('rpc.header.dev', 'Development', {
      ns: 'apps-config'
    }),
    value: ''
  }, ...createDev(t)].filter(({
    isDisabled
  }) => !isDisabled);
}