import { BigNumber, utils } from 'ethers';

export function fromWei(amount: BigNumber | string): string {
  return utils.formatEther(amount);
}

export function toWei(amount: string | number): BigNumber {
  return utils.parseEther(amount.toString());
}
