import mixpanel from 'mixpanel-browser'

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
  if (account) {
    mixpanel.identify(account)
  }

  if (props) {
    mixpanel.track(event, props)
    return
  }

  mixpanel.track(event)
}

const logPremium = (account, coverKey, productKey, dollarValue) => {
  if (account) {
    mixpanel.identify(account)
  }

  mixpanel.time_event(stories.POLICY_PURCHASED)
  mixpanel.track(stories.POLICY_PURCHASED, { account, coverKey, productKey, dollarValue })
}

const logAddLiquidity = (account, coverKey, productKey, dollarValue) => {
  if (account) {
    mixpanel.identify(account)
  }

  mixpanel.time_event(stories.LIQUIDITY_ADDED)
  mixpanel.track(stories.LIQUIDITY_ADDED, { account, coverKey, productKey, dollarValue })
}

const logWalletConnected = (account) => {
  mixpanel.identify(account)
}

export { init, log, logAddLiquidity, logPremium, logWalletConnected }