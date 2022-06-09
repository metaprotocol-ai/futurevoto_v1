import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PancakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('future.voto')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('future.voto')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('future.voto')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('future.voto')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('future.voto')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('future.voto')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('future.voto')}`,
      }
    case '/prediction':
      return {
        title: `${t('Future(Beta)')} | ${t('future.voto')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('future.voto')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('future.voto')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('future.voto')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('future.voto')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('future.voto')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('future.voto')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('future.voto')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('future.voto')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('future.voto')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('future.voto')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('future.voto Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('future.voto Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('future.voto Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('future.voto')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('future.voto')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('future.voto')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('future.voto')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('future.voto')}`,
      }
    default:
      return null
  }
}
