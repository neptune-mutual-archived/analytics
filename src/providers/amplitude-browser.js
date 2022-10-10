import * as amplitude from '@amplitude/analytics-browser'

const events = {
  PREMIUM: 'PREMIUM',
  LIQUIDITY: 'LIQUIDITY'
}

const init = (option) => {
  option = option || {}

  amplitude.init(process.env.AMPLITUDE_API_KEY, null, {
    // apiEndPoint: 'https://amp.analytics.neptunemutual.com',
    serverZone: amplitude.Types.ServerZone.EU,
    ...option
  })
}

const log = (funnel, journey, step, seq, account, event, props) => {
  init({}, account)

  if (props) {
    amplitude.track(event, { funnel, journey, step, seq, ...props })
    return
  }

  amplitude.track(event)
}

const logPremium = (account, coverKey, productKey, dollarValue) => {
  // funnel: Policy Purchase
  // journey: Purchase-Policy-Page-2
  // sequence: 9999
  // event: 'Closed/Won'

  init({}, account)

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey

  amplitude.revenue(new amplitude.Revenue()
    .setProductId(productId)
    .setRevenueType(events.PREMIUM)
    .setPrice(dollarValue)
    .setQuantity(1)
  )
}

const logAddLiquidity = (account, coverKey, productKey, dollarValue) => {
  // funnel: Liquidity Addition
  // journey: Add-Liquidity-Page-2
  // sequence: 9999
  // event: 'Closed/Won'

  init({}, account)

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey

  amplitude.revenue(new amplitude.Revenue()
    .setProductId(productId)
    .setRevenueType(events.LIQUIDITY)
    .setPrice(dollarValue))
}

const logWalletConnected = (account) => {
  init({}, account)
}

export { log, logAddLiquidity, logPremium, logWalletConnected }
