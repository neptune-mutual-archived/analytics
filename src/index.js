import { Analytics } from './analytics'
import * as provider from './providers/amplitude'

const init = async (option) => {
  const a = new Analytics(provider)
  await a.init(option)
}

const log = async (event, props) => {
  const a = new Analytics(provider)
  await a.log(event, props)
}

const logPremium = async (account, coverKey, productKey, dollarValue) => {
  const a = new Analytics(provider)
  await a.logPremium(account, coverKey, productKey, dollarValue)
}

const logAddLiquidity = async (account, coverKey, productKey, dollarValue) => {
  const a = new Analytics(provider)
  await a.logAddLiquidity(account, coverKey, productKey, dollarValue)
}

export { init, log, logAddLiquidity, logPremium }
