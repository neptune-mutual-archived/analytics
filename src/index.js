import { Analytics } from './analytics'
import * as provider from './providers/amplitude'

const log = async (funnel, journey, step, seq, account, event, props) => {
  const a = new Analytics(provider)
  await a.log(funnel, journey, step, seq, account, event, props)
}

const logPremium = async (account, coverKey, productKey, dollarValue) => {
  // funnel: Policy Purchase
  const a = new Analytics(provider)
  await a.logPremium(account, coverKey, productKey, dollarValue)
}

const logAddLiquidity = async (account, coverKey, productKey, dollarValue) => {
  // funnel: Liquidity Addition
  const a = new Analytics(provider)
  await a.logAddLiquidity(account, coverKey, productKey, dollarValue)
}

export { log, logAddLiquidity, logPremium }
