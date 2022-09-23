// Copyright 2017-2022 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
import type { BN } from '@polkadot/util';
import type { Inflation } from './types';

import { useEffect, useState } from 'react';

import { getInflationParams } from '@polkadot/apps-config';
import { BN_MILLION, BN_ZERO } from '@polkadot/util';

import { createNamedHook } from './createNamedHook';
import { useApi } from './useApi';
import { useCall } from './useCall';

const EMPTY: Inflation = { idealInterest: 0, idealStake: 0, inflation: 0, stakedFraction: 0, stakedReturn: 0 };

function calcInflation (api: ApiPromise, totalStaked: BN, totalIssuance: BN, numAuctions: BN): Inflation {
  const { auctionAdjust, auctionMax, falloff, maxInflation, minInflation, idealStake } = getInflationParams(api);
  const stakedFraction = totalStaked.isZero() || totalIssuance.isZero()
    ? 0
    : totalStaked.mul(BN_MILLION).div(totalIssuance).toNumber() / BN_MILLION.toNumber();
  const stakeTarget = idealStake - (Math.min(auctionMax, numAuctions.toNumber()) * auctionAdjust);
  const idealInterest = maxInflation / stakeTarget;
  const inflation = 100 * (minInflation + (
    stakedFraction <= stakeTarget
      ? (stakedFraction * (idealInterest - (minInflation / stakeTarget)))
      : (((idealInterest * stakeTarget) - minInflation) * Math.pow(2, (stakeTarget - stakedFraction) / falloff))
  ));

  return {
    idealInterest,
    idealStake,
    inflation,
    stakedFraction,
    stakedReturn: stakedFraction
      ? (inflation / stakedFraction)
      : 0
  };
}

export function calcDockInflation (api: ApiPromise, totalStaked: BN, totalIssuance: BN, yearlyEmission: BN): Inflation {
  if (totalStaked.isZero() || totalIssuance.isZero()) {
    return { inflation: 0, stakedReturn: 0 };
  }

  const inflation = yearlyEmission.mul(BN_MILLION).div(totalIssuance).toNumber() / BN_MILLION.toNumber();

  // Yearly emission contains share for treasury and validators. Calculate for validators.
  const treasuryPct = api.consts.stakingRewards.treasuryRewardsPct.toNumber();
  const yearlyForValidators = yearlyEmission.muln(100 - treasuryPct).divn(100);

  const stakedReturn = yearlyForValidators.mul(BN_MILLION).div(totalStaked).toNumber() / BN_MILLION.toNumber();

  return {
    inflation: inflation * 100,
    stakedReturn: stakedReturn * 100
  };
}

export function useInflation (totalStaked?: BN): Inflation {
  const { api } = useApi();
  const totalIssuance = useCall<BN>(api.query.balances?.totalIssuance);
  const auctionCounter = useCall<BN>(api.query.auctions?.auctionCounter);
  const [state, setState] = useState<Inflation>(EMPTY);

  useEffect((): void => {
    const numAuctions = api.query.auctions
      ? auctionCounter
      : BN_ZERO;

    numAuctions && totalIssuance && totalStaked && setState(
      calcInflation(api, totalStaked, totalIssuance, numAuctions)
    );
  }, [api, auctionCounter, totalIssuance, totalStaked]);

  return state;
}
