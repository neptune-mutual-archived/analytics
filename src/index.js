import { Analytics } from './analytics'
// import * as provider from './providers/amplitude'
import * as provider from './providers/amplitude-browser'

const a = new Analytics(provider);

const log = async (network, funnel, journey, step, seq, account, event, props) => {
  try {
    await a.log(network, funnel, journey, step, seq, account, event, props)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logPremium = async (network, account, coverKey, productKey, dollarValue) => {
  // funnel: Policy Purchase
  try {
    await network, a.logPremium(account, coverKey, productKey, dollarValue)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logAddLiquidityRevenue = async (network, account, coverKey, productKey, dollarValue) => {
  try {
    await a.logAddLiquidityRevenue(network, account, coverKey, productKey, dollarValue)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logPageLoadWebsite = async (network, pageName = "index") => {
  try {
    await a.logPageLoadWebsite(network, pageName)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logButtonClick = async (network, buttonName, buttonDescription, eventData = {}, type = "click") => {
  try {
    await a.logButtonClick(network, buttonName, buttonDescription, eventData, type)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logGesture = async (network, name, description, eventData = {}, type = "swipe") => {
  try {
    await a.logGesture(network, name, description, eventData, type)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logPageLoad = async (network, account = "N/A", path) => {
  try {
    await a.logPageLoad(network, account , path)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logOpenExternalPage = async (network, account = "N/A", path) => {
  try {
    await a.logOpenExternalPage(network, account, path)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logOpenConnectionPopup = async (network, account = "N/A") => {
  try {
    await a.logOpenConnectionPopup(network, account)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logCloseConnectionPopup = async (network, account = "N/A") => {
  try {
    await a.logCloseConnectionPopup(network, account)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logWalletConnected = async (network, account) => {
  try {
    await a.logWalletConnected(network, account)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logWalletDisconnected = async (network, account) => {
  try {
    await a.logWalletDisconnected(network, account)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logViewAccountOnExplorer = async (network, account) => {
  try {
    await a.logViewAccountOnExplorer(network, account)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logUnlimitedApprovalToggled = async (network, account, enabled) => {
  try {
    await a.logUnlimitedApprovalToggled(network, account, enabled)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logCoverProductsSeach = async (network, account = "N/A", searchTerm) => {
  try {
    await a.logCoverProductsSeach(network, account, searchTerm)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logCoverProductsSort = async (network, account = "N/A", sortOrder) => {
  try {
    await a.logCoverProductsSort(network, account , sortOrder)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logCoverProductsViewChanged = async (network, account = "N/A", view) => {
  try {
    await a.logCoverProductsViewChanged(network, account, view)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logPolicyPurchaseRulesAccepted = async (network, account = "N/A", coverKey, productKey) => {
  try {
    await a.logPolicyPurchaseRulesAccepted(network, account, coverKey, productKey)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logPolicyPurchase = async ({ network, account, coverKey, productKey, coverFee, coverFeeCurrency, protection, protectionCurrency, coveragePeriod, referralCode, tx }) => {
  try {
    await a.logPolicyPurchase({ network, account, coverKey, productKey, coverFee, coverFeeCurrency, protection, protectionCurrency, coveragePeriod, referralCode, tx })
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logAddLiquidityRulesAccepted = async (network, account = "N/A", coverKey) => {
  try {
    await a.logAddLiquidityRulesAccepted(network, account, coverKey)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logAddLiquidity = async ({ network, account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, tx }) => {
  try {
    await a.logAddLiquidity({ network, account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, tx })
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logRemoveLiquidityModalOpen = async (network, account, coverKey) => {
  try {
    await a.logRemoveLiquidityModalOpen(network, account, coverKey)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logRemoveLiquidity = async ({ network, account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, exit, tx }) => {
  try {
    await a.logRemoveLiquidity({ network, account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, exit, tx })
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logReportIncidentRulesAccepted = async (network, account = "N/A", coverKey, productKey) => {
  try {
    await a.logReportIncidentRulesAccepted(network, account, coverKey, productKey)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logIncidentReportStakeApproved = async (network, account, coverKey, productKey, stake, tx) => {
  try {
    await a.logIncidentReportStakeApproved(network, account, coverKey, productKey, stake, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logIncidentReported = async ({ network, account, coverKey, productKey, stake, incidentTitle, incidentDescription, incidentProofs, incidentDate, tx }) => {
  try {
    await a.logIncidentReported({ network, account, coverKey, productKey, stake, incidentTitle, incidentDescription, incidentProofs, incidentDate, tx })
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logIncidentDisputeStakeApproved = async (network, account, coverKey, productKey, stake, tx) => {
  try {
    await a.logIncidentDisputeStakeApproved(network, account, coverKey, productKey, stake, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logIncidentDisputed = async ({ network, account, coverKey, productKey, stake, disputeTitle, disputeDescription, disputeProofs, tx }) => {
  try {
    await a.logIncidentDisputed({ network, account, coverKey, productKey, stake, disputeTitle, disputeDescription, disputeProofs, tx })
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logBondLpTokenApproval = async (network, account, lpTokenAmount, tx) => {
  try {
    await a.logBondLpTokenApproval(network, account, lpTokenAmount, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logBondCreated = async (network, account, lpTokenAmount, receiveAmount, tx) => {
  try {
    await a.logBondCreated(network, account, lpTokenAmount, receiveAmount, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logBondClaimed = async (network, account, tx) => {
  try {
    await a.logBondClaimed(network, account, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logCoverProductRulesDownload = async (network, account = "N/A", coverKey, productKey) => {
  try {
    await a.logCoverProductRulesDownload(network, account, coverKey, productKey)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logStakingPoolDepositPopupToggled = async (network, account, poolKey, opened) => {
  try {
    await a.logStakingPoolDepositPopupToggled(network, account, poolKey, opened)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logStakingPoolDeposit = async (network, account, poolKey, stake, stakeCurrency, tx) => {
  try {
    await a.logStakingPoolDeposit(network, account, poolKey, stake, stakeCurrency, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logStakingPoolCollectPopupToggled = async (network, account, poolKey, opened) => {
  try {
    await a.logStakingPoolCollectPopupToggled(network, account, poolKey, opened)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logStakingPoolWithdraw = async (network, account, poolKey, stake, stakeCurrency, tx) => {
  try {
    await a.logStakingPoolWithdraw(network, account, poolKey, stake, stakeCurrency, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

const logStakingPoolWithdrawRewards = async (network, account, poolKey, tx) => {
  try {
    await a.logStakingPoolWithdrawRewards(network, account, poolKey, tx)
  } catch(err) {
    console.log(`Unhandled Error: ${err}`)
  }
}

export { 
  log, 
  logPremium,
  logAddLiquidityRevenue,
  logPageLoadWebsite,
  logButtonClick,
  logGesture,
  logPageLoad,
  logOpenExternalPage,
  logOpenConnectionPopup,
  logCloseConnectionPopup,
  logWalletConnected,
  logWalletDisconnected,
  logViewAccountOnExplorer,
  logUnlimitedApprovalToggled,
  logCoverProductsSeach,
  logCoverProductsSort,
  logCoverProductsViewChanged,
  logPolicyPurchaseRulesAccepted,
  logPolicyPurchase,
  logAddLiquidityRulesAccepted,
  logAddLiquidity,
  logRemoveLiquidityModalOpen,
  logRemoveLiquidity,
  logReportIncidentRulesAccepted,
  logIncidentReportStakeApproved,
  logIncidentReported,
  logIncidentDisputeStakeApproved,
  logIncidentDisputed,
  logBondLpTokenApproval,
  logBondCreated,
  logBondClaimed,
  logCoverProductRulesDownload,
  logStakingPoolDepositPopupToggled,
  logStakingPoolDeposit,
  logStakingPoolCollectPopupToggled,
  logStakingPoolWithdraw,
  logStakingPoolWithdrawRewards,
}
