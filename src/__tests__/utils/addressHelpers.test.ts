import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0xC78061fE6837c14d9Ac8547D8c8f9Ed4EC39bf0e',
    97: '0xC78061fE6837c14d9Ac8547D8c8f9Ed4EC39bf0e',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '56'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '31337'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
})
