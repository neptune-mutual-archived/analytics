import amplitude from 'amplitude-js'

const events = {
  PREMIUM: 'PREMIUM',
  LIQUIDITY: 'LIQUIDITY'
}

const getInstance = () => {
  return amplitude.getInstance('website')
}

const init = (option) => {
  const i = getInstance()

  option = option || {}

  i.init('a2dbce0e18dfe5f8e74493843ff5c053', null, {
    apiEndPoint: 'https://amp.analytics.neptunemutual.com',
    includeReferrer: true,
    includeUtm: true,
    ...option
  }).setVersionName('v1')
}

const log = (account, event, props) => {
  const i = getInstance()

  if (account) {
    i.setUserId(account)
  }

  if (props) {
    i.logEvent(event, props)
    return
  }

  i.logEvent(event)
}

const logPremium = (account, coverKey, productKey, dollarValue) => {
  const i = getInstance()

  if (account) {
    i.setUserId(account)
  }

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey

  i.logRevenueV2(new amplitude.Revenue()
    .setProductId(productId)
    .setRevenueType(events.PREMIUM)
    .setPrice(dollarValue))
}

const logAddLiquidity = (account, coverKey, productKey, dollarValue) => {
  const i = getInstance()

  if (account) {
    i.setUserId(account)
  }

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey

  i.logRevenueV2(new amplitude.Revenue()
    .setProductId(productId)
    .setRevenueType(events.LIQUIDITY)
    .setPrice(dollarValue))
}

const logWalletConnected = (account) => {
  const i = getInstance()
  i.setUserId(account)
}

export { init, log, logAddLiquidity, logPremium, logWalletConnected }
