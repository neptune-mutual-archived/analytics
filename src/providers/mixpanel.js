import mixpanel from 'mixpanel'

const stories = {
  POLICY_PURCHASED: 'Policy Purchased',
  LIQUIDITY_ADDED: 'Liquidity Added'
}

const init = (option) => {
  option = option || {}

  mixpanel.init('a2dbce0e18dfe5f8e74493843ff5c053', null, {
    api_host: 'https://mp.analytics.neptunemutual.com',
    ...option
  })
}

const log = (account, event, props) => {
  const track = () => {
    if (props) {
      mixpanel.track(event, props)
      return
    }

    mixpanel.track(event)
  }

  if (!account) {
    track()
    return
  }

  mixpanel.alias(account, undefined, () => {
    track()
  })
}

const logPremium = (account, coverKey, productKey, dollarValue) => {
  mixpanel.alias(account, undefined, () => {
    mixpanel.track(stories.POLICY_PURCHASED, { account, coverKey, productKey, dollarValue })
  })
}

const logAddLiquidity = (account, coverKey, productKey, dollarValue) => {
  mixpanel.alias(account, undefined, () => {
    mixpanel.track(stories.LIQUIDITY_ADDED, { account, coverKey, productKey, dollarValue })
  })
}

const logWalletConnected = (account) => {
  mixpanel.alias(account)
}

export { init, log, logAddLiquidity, logPremium, logWalletConnected }
