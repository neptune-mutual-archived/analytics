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

  async logAddLiquidityRevenue (account, coverKey, productKey, dollarValue) {
    try {
      this.provider.logAddLiquidityRevenue(account, coverKey, productKey, dollarValue)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logPageLoadWebsite (pageName = "index") {
    try {
      this.provider.logPageLoadWebsite(pageName)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logButtonClick (buttonName, buttonDescription, eventData = {}, type = "click") {
    try {
      this.provider.logButtonClick(buttonName, buttonDescription, eventData , type)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logGesture (name, description, eventData = {}, type = "swipe") {
    try {
      this.provider.logGesture(name, description, eventData, type)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logPageLoad (account = "N/A", path) {
    try {
      this.provider.logPageLoad(account, path)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logOpenExternalPage (account = "N/A", path) {
    try {
      this.provider.logOpenExternalPage(account, path)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logOpenConnectionPopup (account = "N/A") {
    try {
      this.provider.logOpenConnectionPopup(account)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logCloseConnectionPopup (account = "N/A") {
    try {
      this.provider.logCloseConnectionPopup(account)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logWalletConnected (account) {
    try {
      this.provider.logWalletConnected(account)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logWalletDisconnected (account) {
    try {
      this.provider.logWalletDisconnected(account)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logViewAccountOnExplorer (account) {
    try {
      this.provider.logViewAccountOnExplorer(account)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logUnlimitedApprovalToggled (account, enabled) {
    try {
      this.provider.logUnlimitedApprovalToggled(account, enabled)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logCoverProductsSeach (account = "N/A", searchTerm) {
    try {
      this.provider.logCoverProductsSeach(account, searchTerm)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logCoverProductsSort (account = "N/A", sortOrder) {
    try {
      this.provider.logCoverProductsSort(account, sortOrder)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logCoverProductsViewChanged (account = "N/A", view) {
    try {
      this.provider.logCoverProductsViewChanged(account, view)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logPolicyPurchaseRulesAccepted (account = "N/A", coverKey, productKey) {
    try {
      this.provider.logPolicyPurchaseRulesAccepted(account, coverKey, productKey)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logPolicyPurchase ({ account, coverKey, productKey, coverFee, coverFeeCurrency, protection, protectionCurrency, coveragePeriod, referralCode, tx }) {
    try {
      this.provider.logPolicyPurchase({ account, coverKey, productKey, coverFee, coverFeeCurrency, protection, protectionCurrency, coveragePeriod, referralCode, tx })
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logAddLiquidityRulesAccepted (account = "N/A", coverKey) {
    try {
      this.provider.logAddLiquidityRulesAccepted(account, coverKey)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logAddLiquidity ({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, tx }) {
    try {
      this.provider.logAddLiquidity({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, tx })
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logRemoveLiquidityModalOpen (account, coverKey) {
    try {
      this.provider.logRemoveLiquidityModalOpen(account, coverKey)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logRemoveLiquidity ({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, exit, tx }) {
    try {
      this.provider.logRemoveLiquidity({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, exit, tx })
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logReportIncidentRulesAccepted (account = "N/A", coverKey, productKey) {
    try {
      this.provider.logReportIncidentRulesAccepted(account, coverKey, productKey)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logIncidentReportStakeApproved (account, coverKey, productKey, stake, tx) {
    try {
      this.provider.logIncidentReportStakeApproved(account, coverKey, productKey, stake, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logIncidentReported ({ account, coverKey, productKey, stake, incidentTitle, incidentDescription, incidentProofs, incidentDate, tx }) {
    try {
      this.provider.logIncidentReported({ account, coverKey, productKey, stake, incidentTitle, incidentDescription, incidentProofs, incidentDate, tx })
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logIncidentDisputeStakeApproved (account, coverKey, productKey, stake, tx) {
    try {
      this.provider.logIncidentDisputeStakeApproved(account, coverKey, productKey, stake, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logIncidentDisputed ({ account, coverKey, productKey, stake, disputeTitle, disputeDescription, disputeProofs, tx }) {
    try {
      this.provider.logIncidentDisputed({ account, coverKey, productKey, stake, disputeTitle, disputeDescription, disputeProofs, tx })
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logBondLpTokenApproval (account, lpTokenAmount, tx) {
    try {
      this.provider.logBondLpTokenApproval(account, lpTokenAmount, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logBondCreated (account, lpTokenAmount, receiveAmount, tx) {
    try {
      this.provider.logBondCreated(account, lpTokenAmount, receiveAmount, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logBondClaimed (account, tx) {
    try {
      this.provider.logBondClaimed(account, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logCoverProductRulesDownload (account = "N/A", coverKey, productKey) {
    try {
      this.provider.logCoverProductRulesDownload(account, coverKey, productKey)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logStakingPoolDepositPopupToggled (account, poolKey, opened) {
    try {
      this.provider.logStakingPoolDepositPopupToggled(account, poolKey, opened)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logStakingPoolDeposit (account, poolKey, stake, stakeCurrency, tx) {
    try {
      this.provider.logStakingPoolDeposit(account, poolKey, stake, stakeCurrency, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logStakingPoolCollectPopupToggled (account, poolKey, opened) {
    try {
      this.provider.logStakingPoolCollectPopupToggled(account, poolKey, opened)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logStakingPoolWithdraw (account, poolKey, stake, stakeCurrency, tx) {
    try {
      this.provider.logStakingPoolWithdraw(account, poolKey, stake, stakeCurrency, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

  async logStakingPoolWithdrawRewards (account, poolKey, tx) {
    try {
      this.provider.logStakingPoolWithdrawRewards(account, poolKey, tx)
    } catch(error) {
      console.error('Unhandled Error', error)
    }
  }

}
