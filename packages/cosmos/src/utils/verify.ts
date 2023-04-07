import { ChainName } from '@cosmos-kit/core';
import { chains } from 'chain-registry';

export function isCosmosChain(chainName: ChainName) {
  if (chains.findIndex((chain) => chain.chain_name === chainName) === -1) {
    return false;
  } else {
    return true;
  }
}