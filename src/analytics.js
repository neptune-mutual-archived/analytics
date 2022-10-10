export class Analytics {
  constructor (provider) {
    this.provider = provider
  }

  async init (options) {
    try {
      await this.provider.init(options)
    } catch (error) {
      console.error('Unhandled Error', error)
    }
  }

  async log (funnel, journey, step, seq, account, e, props) {
    try {
      await this.provider.log(funnel, journey, step, seq, account, e, props)
    } catch (error) {
      console.error('Unhandled Error', error)
    }
  }

  async logPremium (account, coverKey, productKey, dollarValue) {
    try {
      await this.provider.logPremium(account, coverKey, productKey, dollarValue)
    } catch (error) {
      console.error(error)
    }
  }

  async logAddLiquidity (account, coverKey, productKey, dollarValue) {
    try {
      await this.provider.logAddLiquidity(account, coverKey, productKey, dollarValue)
    } catch (error) {
      console.error(error)
    }
  }

  async logWalletConnected (account) {
    try {
      await this.provider.logWalletConnected(account)
    } catch (error) {
      console.error(error)
    }
  }
}
